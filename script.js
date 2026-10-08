(() => {
  const track = (eventName) => {
    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track(eventName);
    }
  };

  document.querySelectorAll('a.button[href="#demande"]').forEach((link) => {
    link.addEventListener('click', () => track('cta-landing-page'));
  });

  document.querySelectorAll('a[href*="calendar.app.google"]').forEach((link) => {
    link.addEventListener('click', () => track('diagnostic-booking'));
  });

  // Le Pixel OpenAI ne mesure rien sans un accord enregistré.
  const consentKey = 'cc-openai-ads-consent';
  const consentPanel = document.getElementById('ad-consent-panel');
  const acceptButton = document.getElementById('ad-consent-accept');
  const rejectButton = document.getElementById('ad-consent-reject');
  const settingsButton = document.getElementById('ad-consent-settings');

  const readAdsConsent = () => {
    try { return window.localStorage.getItem(consentKey); }
    catch (_) { return null; }
  };

  const recordPageView = () => {
    if (typeof window.oaiq === 'function') {
      window.oaiq('measure', 'page_viewed', {
        type: 'contents',
        contents: [{ id: 'win-home', name: 'Offre Win Concept Créatif', content_type: 'page' }]
      });
    }
  };

  const setAdsConsent = (accepted) => {
    if (typeof window.oaiq === 'function') window.oaiq('consent', accepted);
    try { window.localStorage.setItem(consentKey, accepted ? 'accepted' : 'rejected'); }
    catch (_) {}
    if (consentPanel) consentPanel.hidden = true;
    if (accepted) recordPageView();
  };

  if (consentPanel) consentPanel.hidden = readAdsConsent() !== null;
  if (readAdsConsent() === 'accepted') recordPageView();

  if (acceptButton) acceptButton.addEventListener('click', () => setAdsConsent(true));
  if (rejectButton) rejectButton.addEventListener('click', () => setAdsConsent(false));
  if (settingsButton) settingsButton.addEventListener('click', () => {
    if (consentPanel) {
      consentPanel.hidden = false;
      if (rejectButton) rejectButton.focus();
    }
  });

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('input', () => track('lead-form-start'), { once: true });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const button = form.querySelector('button[type="submit"]');
      const data = new FormData(form);
      const attachments = [...form.querySelectorAll('input[type="file"]')]
        .flatMap((input) => [...input.files]);
      const totalAttachmentSize = attachments.reduce((total, file) => total + file.size, 0);

      if (totalAttachmentSize > 1 * 1024 * 1024) {
        status.textContent = "Les pièces jointes ne doivent pas dépasser 1 Mo au total.";
        return;
      }

      try {
        if (button) button.disabled = true;
        status.textContent = "Envoi…";

        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: data
        });

        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.success === false || result.success === 'false') {
          throw new Error(result.message || 'submission_failed');
        }

        track('lead-form-submit');
        // Compter un prospect seulement si FormSubmit confirme l'envoi.
        if (readAdsConsent() === 'accepted' && typeof window.oaiq === 'function') {
          window.oaiq('measure', 'lead_created', { type: 'customer_action' });
        }
        form.reset();
        status.textContent = "Merci. Votre demande a bien été envoyée.";
      } catch (error) {
        status.textContent = "L’envoi n’a pas fonctionné. Vous pouvez appeler au 1 514-781-9491.";
      } finally {
        if (button) button.disabled = false;
      }
    });
  }

  document.querySelectorAll('.brand img').forEach((img) => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const fallback = img.nextElementSibling;
      if (fallback) fallback.style.display = 'inline';
    });
  });
})();

(() => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const host = window.location.hostname;
    const cloudflareReady = host.endsWith('.pages.dev') || host === 'win.conceptcreatif.com';

    if (!cloudflareReady) {
      status.textContent = "Aperçu : le formulaire sera activé lors du branchement à Cloudflare.";
      return;
    }

    try {
      status.textContent = "Envoi…";
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) throw new Error('submission_failed');

      form.reset();
      status.textContent = "Merci. Votre demande a bien été envoyée.";
    } catch (error) {
      status.textContent = "Le formulaire n’est pas encore relié au service d’envoi. Vous pouvez appeler au 1 514-781-9491.";
    }
  });

  document.querySelectorAll('.brand img').forEach((img) => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const fallback = img.nextElementSibling;
      if (fallback) fallback.style.display = 'inline';
    });
  });
})();

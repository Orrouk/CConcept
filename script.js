(() => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

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

      form.reset();
      status.textContent = "Merci. Votre demande a bien été envoyée.";
    } catch (error) {
      status.textContent = "L’envoi n’a pas fonctionné. Vous pouvez appeler au 1 514-781-9491.";
    } finally {
      if (button) button.disabled = false;
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

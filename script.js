const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const spinner = document.getElementById('spinner');
const responseMessage = document.getElementById('form-response');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const honeypot = form.querySelector('input[name="phone"]');
    if (honeypot && honeypot.value.trim() !== '') {
      responseMessage.textContent = 'Formulaire rejeté.';
      responseMessage.style.color = '#e03d3d';
      return;
    }

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      responseMessage.textContent = 'Merci de remplir tous les champs.';
      responseMessage.style.color = '#e03d3d';
      return;
    }

    submitBtn.disabled = true;
    spinner.style.display = 'inline-block';
    responseMessage.textContent = '';

    await new Promise((resolve) => setTimeout(resolve, 800));

    submitBtn.disabled = false;
    spinner.style.display = 'none';
    responseMessage.textContent = 'Votre message a bien été pris en compte. Merci !';
    responseMessage.style.color = '#1a6b3a';
    form.reset();
  });
}

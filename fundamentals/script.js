const form = document.querySelector('#registration-form')
const email = document.querySelector('#email')
const message = document.querySelector('#form-message')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (email.value.trim()) {
    message.textContent = 'E-mail registrado para o experimento.'
    return
  }

  message.textContent = 'Digite um e-mail para continuar.'
})

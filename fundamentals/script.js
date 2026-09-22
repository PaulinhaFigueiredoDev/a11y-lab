const $ = (selector, parent = document) => parent.querySelector(selector)
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)]

const form = $('#practice-form')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = $('#name')
  const email = $('#email')
  const nameError = $('#name-error')
  const emailError = $('#email-error')
  let valid = true
  nameError.textContent = ''
  emailError.textContent = ''
  $('#form-status').textContent = ''
  name.removeAttribute('aria-invalid')
  email.removeAttribute('aria-invalid')

  if (!name.value.trim()) {
    nameError.textContent = 'Informe seu nome.'
    name.setAttribute('aria-invalid', 'true')
    valid = false
  }
  if (!email.value.trim()) {
    emailError.textContent = 'Informe seu e-mail.'
    email.setAttribute('aria-invalid', 'true')
    valid = false
  } else if (!email.validity.valid) {
    emailError.textContent = 'Digite um e-mail válido.'
    email.setAttribute('aria-invalid', 'true')
    valid = false
  }
  if (valid) $('#form-status').textContent = 'Perfil salvo com sucesso.'
  else (nameError.textContent ? name : email).focus()
})

$$('.accordion-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const panel = $('#' + trigger.getAttribute('aria-controls'))
    const expanded = trigger.getAttribute('aria-expanded') === 'true'
    trigger.setAttribute('aria-expanded', String(!expanded))
    panel.hidden = expanded
  })
})

const tabs = $$('.tab')
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(index))
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length
    selectTab(next)
    tabs[next].focus()
  })
})
function selectTab(index) {
  tabs.forEach((tab, tabIndex) => {
    const selected = tabIndex === index
    tab.setAttribute('aria-selected', String(selected))
    tab.tabIndex = selected ? 0 : -1
    $('#' + tab.getAttribute('aria-controls')).hidden = !selected
  })
}

const menuButton = $('#menu-button')
const menu = $('#profile-menu')
const menuItems = $$('[role="menuitem"]', menu)
function closeMenu(returnFocus = false) {
  menu.hidden = true
  menuButton.setAttribute('aria-expanded', 'false')
  if (returnFocus) menuButton.focus()
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!open))
  menu.hidden = open
  if (!open) menuItems[0].focus()
})
menuItems.forEach((item, index) => item.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu(true)
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    menuItems[(index + (event.key === 'ArrowDown' ? 1 : -1) + menuItems.length) % menuItems.length].focus()
  }
  if (event.key === 'Home') { event.preventDefault(); menuItems[0].focus() }
  if (event.key === 'End') { event.preventDefault(); menuItems.at(-1).focus() }
}))

const technologies = ['NVDA', 'VoiceOver', 'TalkBack', 'Narrator']
const comboInput = $('#technology-input')
const suggestionList = $('#technology-list')
let activeSuggestion = -1
function renderSuggestions() {
  const matches = technologies.filter((item) => item.toLowerCase().includes(comboInput.value.toLowerCase()))
  suggestionList.innerHTML = matches.map((item, index) => `<li id="suggestion-${index}" role="option" aria-selected="false" tabindex="-1">${item}</li>`).join('')
  suggestionList.hidden = !matches.length
  comboInput.setAttribute('aria-expanded', String(Boolean(matches.length)))
  activeSuggestion = -1
  $$('[role="option"]', suggestionList).forEach((option) => option.addEventListener('click', () => chooseSuggestion(option.textContent)))
}
function chooseSuggestion(value) {
  comboInput.value = value
  suggestionList.hidden = true
  comboInput.setAttribute('aria-expanded', 'false')
  $('#combo-status').textContent = `${value} selecionado.`
}
comboInput.addEventListener('input', renderSuggestions)
comboInput.addEventListener('keydown', (event) => {
  const options = $$('[role="option"]', suggestionList)
  if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && options.length) {
    event.preventDefault()
    activeSuggestion = (activeSuggestion + (event.key === 'ArrowDown' ? 1 : options.length - 1)) % options.length
    options.forEach((option, index) => option.setAttribute('aria-selected', String(index === activeSuggestion)))
    comboInput.setAttribute('aria-activedescendant', options[activeSuggestion].id)
  }
  if (event.key === 'Enter' && options[activeSuggestion]) { event.preventDefault(); chooseSuggestion(options[activeSuggestion].textContent) }
  if (event.key === 'Escape') { suggestionList.hidden = true; comboInput.setAttribute('aria-expanded', 'false') }
})

$('#toast-button').addEventListener('click', () => {
  const toast = $('#toast')
  toast.hidden = false
  window.setTimeout(() => { toast.hidden = true }, 4000)
})

const slides = ['Teclado primeiro', 'Accessibility Tree depois', 'Leitor de tela por último']
let slideIndex = 0
let carouselPaused = false
function updateSlide() {
  $('#current-slide').textContent = slides[slideIndex]
  $('#carousel-description').textContent = `Slide ${slideIndex + 1} de ${slides.length}: ${slides[slideIndex]}.`
}
$('#previous-slide').addEventListener('click', () => { slideIndex = (slideIndex + slides.length - 1) % slides.length; updateSlide() })
$('#next-slide').addEventListener('click', () => { slideIndex = (slideIndex + 1) % slides.length; updateSlide() })
$('#pause-carousel').addEventListener('click', (event) => {
  carouselPaused = !carouselPaused
  event.currentTarget.setAttribute('aria-pressed', String(carouselPaused))
  event.currentTarget.textContent = carouselPaused ? 'Retomar rotação' : 'Pausar rotação'
})
window.setInterval(() => { if (!carouselPaused) { slideIndex = (slideIndex + 1) % slides.length; updateSlide() } }, 6000)

const dialog = $('#practice-dialog')
const dialogButton = $('#open-dialog')
dialogButton.addEventListener('click', () => dialog.showModal())
$('#close-dialog').addEventListener('click', () => dialog.close())
$('#dialog-confirm').addEventListener('click', () => dialog.close())
dialog.addEventListener('close', () => dialogButton.focus())


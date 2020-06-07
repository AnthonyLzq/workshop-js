const h1 = document.querySelector('h1')

const clickMe = () => {
  if (h1.classList.contains('hidden'))
    h1.classList.remove('hidden')
  else
    h1.classList.add('hidden')
}
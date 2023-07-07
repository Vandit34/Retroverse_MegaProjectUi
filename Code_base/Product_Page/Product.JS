const btn = document.querySelector('.nav_close_open_img img')
const navbar = document.getElementsByTagName('nav')[0]

btn.addEventListener('click', () => {
  if (navbar.style.display === 'none') {
    navbar.style.display = 'block'
  } else {
    navbar.style.display = 'none'
  }

  if (btn.classList.contains('anti_rotate')) {
    btn.classList.remove('anti_rotate')
    btn.classList.add('rotate')
  } else if (btn.classList.contains('rotate')) {
    btn.classList.remove('rotate')
    btn.classList.add('anti_rotate')
  } else {

    btn.classList.add('anti_rotate')
  }
})

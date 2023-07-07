
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


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx

const slide_effect = document.querySelector('.slide-effect')
const list_of_style = window.getComputedStyle(slide_effect)
const index_value = parseInt(list_of_style.getPropertyValue('--slide-index'))

const right_btn = document.querySelector('.bxs-caret-right-square')
const left_btn = document.querySelector('.bxs-caret-left-square')
// const btns = document.querySelectorAll(".bx");


let val = 0;

left_btn.addEventListener("click", () => {
  if (val>0 && val<=7 ) {
    val=val-1    
    slide_effect.style.setProperty('--slide-index', val )
    updateButtonColors(val)
  }
})

right_btn.addEventListener('click', () => {

  if (val>=0 && val<7 ) {
    val=val+1    
    slide_effect.style.setProperty('--slide-index', val)
    updateButtonColors(val)
  }
})


function updateButtonColors(value) {
  if (value === 0)
  {
    left_btn.style.color = "#ff4343";
  }
   else if (value===7)
  {
    right_btn.style.color = "#ff4343";
  }
  
  else  
  {
    left_btn.style.color = "rgb(0, 255, 68)";
    right_btn.style.color = "rgb(0, 255, 68)";
  }
}
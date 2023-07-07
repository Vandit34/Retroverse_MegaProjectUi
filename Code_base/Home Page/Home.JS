// ⭐ Custom NavbAr

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

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// ⭐ Search Feature

const search_btn = document.querySelector('.fa-magnifying-glass')
let product_url = "/Code_base/Product_Page/Product.HTML";
search_btn.onclick = function ()
  {
  window.location.replace(product_url)
  }




//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// ⭐ Sroll Feature(Trending Section)
// document.addEventListener('click', e => {
//   let handle
//   if (e.target.matches('.handle')) {
//     handle = e.target
//   } else {
//     handle = e.target.closest('.handle')
//   }
//   if (handle != null) onHandleClick(handle)
// })

// function onHandleClick(handle)
// {

// }

// const left_angle = document.querySelector('.fa-angle-left')
// const right_angle = document.querySelector('.fa-angle-right')

// const scroll_section_element = document.querySelector('.scroll_section')
// const scroll_section_computed = window.getComputedStyle(scroll_section_element)
// const scroll_index = parseInt(
  //   scroll_section_computed.getPropertyValue('--carousel-index')
  // )

//   let val_1 = 0
// left_angle.addEventListener('click', () => {
//   if (val_1 > 0 && val_1 <= 5) {
//     val_1 = val_1 - 1
//     scroll_section_element.style.setProperty('--carousel-index', val_1)
//   }
// })

// right_angle.addEventListener('click', () => {
//   if (val_1 >= 0 && val_1 < 5) {
//     val_1 = val_1 + 1
//     scroll_section_element.style.setProperty('--carousel-index', val_1)
//   }
// })

// // =========================================

// const media_1 = window.matchMedia(`(max-width:1519px)`);

// function handlemedia_1()
// {
//   let val_2 = 0
//   left_angle.addEventListener('click', () => {
//     if (val_2 > 0 && val_2 <= 6) {
//       val_2 = val_2 - 1
//       scroll_section_element.style.setProperty('--carousel-index', val_2)
//     }
//   })
  
//   right_angle.addEventListener('click', () => {
//     if (val_2 >= 0 && val_2 < 6) {
//       val_2 = val_2 + 1
//       scroll_section_element.style.setProperty('--carousel-index', val_2)
//     }
//   })
// }

// media_1.addEventListener('change', handlemedia_1)

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const carousel = document.querySelector('.trending_carousel');

carousel.addEventListener('touchstart', handleTouchStart);
carousel.addEventListener('touchmove', handleTouchMove);

let touchStartX = 0;
let touchMoveX = 0;

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  touchMoveX = event.touches[0].clientX;
  const diff = touchStartX - touchMoveX;

  // Adjust the threshold value as needed for swipe sensitivity
  if (diff > 100) {
    carousel.scrollBy({ left: 300, behavior: 'smooth' }); // Scroll to the next card
  } else if (diff < -100) {
    carousel.scrollBy({ left: -300, behavior: 'smooth' }); // Scroll to the previous card
  }
}

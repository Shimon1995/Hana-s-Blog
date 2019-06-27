
const query = str => document.querySelector(str)
const body = document.documentElement

let scrollPos = 0

window.addEventListener('scroll', () => {
  if(body.scrollTop > scrollPos || body.scrollTop == 0) {
    query('.fa-angle-double-down').style.transform = 'translateY(-41px)'
  } else {
    query('.fa-angle-double-down').style.transform = 'translateY(0)'
  }
  scrollPos = body.scrollTop
})

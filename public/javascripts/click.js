
const query = (str) => document.querySelector(str)
const body = document.documentElement

const condition = () => {
  if(document.body.offsetWidth < 1000) {
    query('nav').style.transform = 'translateY(-70vh)'
    query('.fa-angle-double-up').style.display = 'none'
  }
}


query('#intro').onclick = () => {
  body.scrollTop = 0
  condition()
}

query('#portfolio').onclick = () => {
  body.scrollTop = query('.portfolio').offsetTop
  condition()
}

query('#about').onclick = () => {
  body.scrollTop = query('.about_me').offsetTop
  condition()
}

query('#contact').onclick = () => {
  body.scrollTop = body.scrollHeight
  condition()
}

query('.fa-angle-double-down').onclick = () => {
  query('nav').style.transform = 'translateY(0)'
  setTimeout(() => {
    query('.fa-angle-double-up').style.display = 'block'
  }, 500);
}

query('.fa-angle-double-up').onclick = () => {
  query('nav').style.transform = 'translateY(-70vh)'
  query('.fa-angle-double-up').style.display = 'none'
  }

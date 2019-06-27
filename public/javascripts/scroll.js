
const query = (str) => document.querySelector(str)
let body = document.documentElement

window.onscroll = () => {
  if(body.scrollTop < query('.portfolio').offsetTop)
    query('#intro').classList.add('purple')
  else
    query('#intro').classList.remove('purple')

  if(body.scrollTop >= query('.portfolio').offsetTop && body.scrollTop < query('.about_me').offsetTop)
    query('#portfolio').classList.add('purple')
  else
    query('#portfolio').classList.remove('purple')

  if(body.scrollTop >= query('.about_me').offsetTop && body.scrollTop < body.scrollHeight - screen.height)
    query('#about').classList.add('purple')
  else
    query('#about').classList.remove('purple')

  if(body.scrollTop >= body.scrollHeight - screen.height)
    query('#contact').classList.add('purple')
  else
    query('#contact').classList.remove('purple')
}

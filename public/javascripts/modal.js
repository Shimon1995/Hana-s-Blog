
const query = str => document.querySelector(str)
const queryAll = str => document.querySelectorAll(str)

const modal = query('.modal')
const cap_txt = query('#caption')
const cap_img = query('.modal-content')
const wrp = query('.wrapper')
const figs = queryAll('figure')
const mod = query('.img-mod')

for(let fig of figs) {
  fig.onclick = () => {

    modal.style.display = 'block'
    cap_img.src = fig.firstChild.src

    // window.documentElement.style.overflow = 'hidden'
  }
}

wrp.onclick = () => {

    modal.style.display = 'none'

    // window.documentElement.style.overflow = 'auto'
}

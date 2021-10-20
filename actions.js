const card = document.querySelector('.card')
const container = document.querySelector('#screen')
const icon = document.querySelector('.stores')
const text = document.querySelector('.texto')
const ori = document.querySelector('.imagem')

container.addEventListener('mousemove', e => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25
  console.log(e)
  card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg`

  icon.style.transform = 'translateZ(150px)'
  ori.style.transform = 'translateZ(150px)'
  text.style.transform = 'translateZ(50px)'
})

container.addEventListener('mouseenter', e => {
  card.style.transition = 'none'
})

container.addEventListener('mouseleave', e => {
  card.style.transition = 'all 0.7s ease'

  card.style.transform = `rotateY(0deg) rotateX(0deg)`

  ori.style.transform = 'translateZ(0px)'
  text.style.transform = 'translateZ(0px)'
  icon.style.transform = 'translateZ(0px)'
})

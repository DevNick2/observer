import observer from './Observer.js'

// Código para usar o Observer
const input = document.querySelector('#input')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')

const btnSubscribe1 = document.querySelector('#subscribe1')
const btnSubscribe2 = document.querySelector('#subscribe2')
const btnSubscribe3 = document.querySelector('#subscribe3')

const btnUnsubscribe1 = document.querySelector('#unsubscribe1')
const btnUnsubscribe2 = document.querySelector('#unsubscribe2')
const btnUnsubscribe3 = document.querySelector('#unsubscribe3')

const update1 = text => p1.textContent = text
const update2 = text => p2.textContent = text
const update3 = text => p3.textContent = text

/* Add Observer */
btnSubscribe1.addEventListener('click', e => {
  observer.subscribe(update1)
})
btnSubscribe2.addEventListener('click', e => {
  observer.subscribe(update2)
})
btnSubscribe3.addEventListener('click', e => {
  observer.subscribe(update3)
})

/* Remove Observer */
btnUnsubscribe1.addEventListener('click', e => {
  observer.unsubscribe(update1)
})
btnUnsubscribe2.addEventListener('click', e => {
  observer.unsubscribe(update2)
})
btnUnsubscribe3.addEventListener('click', e => {
  observer.unsubscribe(update3)
})

observer.subscribe(update1)
observer.subscribe(update2)
observer.subscribe(update3)

input.addEventListener('keyup', e => {
  observer.notify(e.target.value)
})

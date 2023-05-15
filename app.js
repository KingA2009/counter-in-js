let countEl = document.getElementById('count')
let saveEl = document.getElementById('save')
let bnt1 = document.querySelector('.button1')
let btn2 = document.querySelector('.button2')

let count = 0
bnt1.addEventListener('click', () => {
  count = count + 1
  countEl.textContent = count
})

btn2.addEventListener('click', () => {
  count = count - 1
  countEl.textContent = count
})

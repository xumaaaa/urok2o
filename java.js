const item1 = document.querySelector('h1')
const body = document.querySelector('body')
const box =  document.querySelector('.box')
const image =  document.querySelector('img')

const name = document.querySelector('.box h1 span')
const surname = document.querySelector('.box h2 span')




// const qu1 = prompt('Укажите цвет фона')
// const qu2 = prompt('Укажите цвет фона бокса')
const qu3 = +prompt('Укажите цвет фона размер бокса')
const qu4 = prompt('Укажите ссылку на картинку')
const qu5 = prompt('Укажите ваше имя')
const qu6 = prompt('Укажите ваше Фамилию')




// body.style.backgroundColor = qu1
// box.style.backgroundColor = qu2
box.style.backgroundColor = qu3 + 'px'
image.src = qu4
name.innerText = qu5
surname.innerText = qu6


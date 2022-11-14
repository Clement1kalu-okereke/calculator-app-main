const buttons = document.querySelectorAll('.btn')
const btnEqual = document.querySelector('#btnEqual')
const btnReset = document.querySelector('#btnReset')
const btnDelete = document.querySelector('#btnDelete')
const display = document.querySelector('#display')
const themes = document.querySelector('#themes')
const body = document.querySelector('body')
let root = document.documentElement;

let expression = ''

buttons.forEach(btn => {
    console.log(btn)
    btn.addEventListener('click', () => {
        btnValue = btn.getAttribute('data-button-value')
        expression += btnValue
        display.innerText = expression;
    })
});

btnEqual.addEventListener('click', () => {
    console.log(expression)
    if (expression) {
        display.innerText = eval(expression)
    } else {
        display.innerText = 0
    }
})

btnReset.addEventListener('click', () => {
    expression = 0
    display.innerText = expression;
})
btnDelete.addEventListener('click', () => {
    expression = expression.slice(0, -1)
    display.innerText = expression
})

display.addEventListener('change', () => {
    alert('changed')
})
/* 
let onChnage = (e) => {
    console.log(e)
    console.log(e.target.value)

    if (e.target.value === 1) {
        display.style.backgroundColor = 'red'
    } else if (e.target.value === 2) {
        display.style.backgroundColor = 'yellow'
    } else if (e.target.value === 3) {
        display.style.backgroundColor = 'green'
    } else {
        console.log(e.target.value)
        display.style.backgroundColor = 'orange'
    }

} */

themes.addEventListener('change', (e) => {
    let sliderVal = e.target.value
    console.log(sliderVal + typeof sliderVal)
    let sliderNumericalVal = parseInt(sliderVal)

    if (sliderNumericalVal === 1) {
        root.style.setProperty('--main-bg', '  hsl(222, 26%, 31%)')
        root.style.setProperty('--keypad-bg', '  hsl(223, 31%, 20%)')
        root.style.setProperty('--screen-bg', '  hsl(224, 36%, 15%)')
        root.style.setProperty('--key-bg', '  hsl(225, 21%, 49%)')
        root.style.setProperty('--key-shadow', '  hsl(224, 28%, 35%)')
        root.style.setProperty('--key-bg-2', ' hsl(30, 25%, 89%)')
        root.style.setProperty('--key-shadow-2', '  hsl(28, 16%, 65%)')
        root.style.setProperty('--key-bg-3', '  hsl(6, 63%, 50%)')
        root.style.setProperty('--key-shadow-3', 'hsl(6, 70%, 34%)')
        root.style.setProperty('--very-dark-grayish-blue', ' hsl(221, 14%, 31%)')
        root.style.setProperty('--White', 'hsl(0, 0%, 100%)')
    } else if (sliderNumericalVal === 2) {
        root.style.setProperty('--main-bg', '  hsl(0, 0%, 90%)')
        root.style.setProperty('--keypad-bg', '  hsl(0, 5%, 81%)')
        root.style.setProperty('--screen-bg', '  hsl(0, 0%, 93%)')
        root.style.setProperty('--key-bg', '  hsl(185, 42%, 37%)')
        root.style.setProperty('--key-shadow', '  hsl(185, 58%, 25%)')
        root.style.setProperty('--key-bg-2', ' hsl(45, 7%, 89%)')
        root.style.setProperty('--key-shadow-2', '  hsl(35, 11%, 61%)')
        root.style.setProperty('--key-bg-3', '  hsl(25, 98%, 40%)')
        root.style.setProperty('--key-shadow-3', 'hsl(25, 99%, 27%)')
        root.style.setProperty('--very-dark-grayish-blue', ' hsl(60, 10%, 19%)')
        root.style.setProperty('--White', 'hsl(198, 20%, 13%)')
    } else if (sliderNumericalVal === 3) {
        root.style.setProperty('--main-bg', ' hsl(268, 75%, 9%)')
        root.style.setProperty('--keypad-bg', 'hsl(268, 71%, 12%)')
        root.style.setProperty('--screen-bg', 'hsl(268, 71%, 12%)')
        root.style.setProperty('--key-bg', 'hsl(281, 89%, 26%)')
        root.style.setProperty('--key-shadow', 'hsl(285, 91%, 52%)')
        root.style.setProperty('--key-bg-2', 'hsl(268, 47%, 21%)')
        root.style.setProperty('--key-shadow-2', 'hsl(290, 70%, 36%)')
        root.style.setProperty('--key-bg-3', 'hsl(176, 100%, 44%)')
        root.style.setProperty('--key-shadow-3', 'hsl(177, 92%, 70%)')
        root.style.setProperty('--very-dark-grayish-blue', 'hsl(52, 100%, 62%)')
        root.style.setProperty('--White', 'hsl(0, 0%, 100%)')
    } else {
        console.log(sliderNumericalVal)
        root.style.setProperty('--main-bg', '  hsl(222, 26%, 31%)')
        root.style.setProperty('--keypad-bg', '  hsl(223, 31%, 20%)')
        root.style.setProperty('--screen-bg', '  hsl(224, 36%, 15%)')
        root.style.setProperty('--key-bg', '  hsl(225, 21%, 49%)')
        root.style.setProperty('--key-shadow', '  hsl(224, 28%, 35%)')
        root.style.setProperty('--key-bg-2', ' hsl(30, 25%, 89%)')
        root.style.setProperty('--key-shadow-2', '  hsl(28, 16%, 65%)')
        root.style.setProperty('--key-bg-3', '  hsl(6, 63%, 50%)')
        root.style.setProperty('--key-shadow-3', 'hsl(6, 70%, 34%)')
        root.style.setProperty('--very-dark-grayish-blue', ' hsl(221, 14%, 31%)')
        root.style.setProperty('--White', 'hsl(0, 0%, 100%)')
    }

})

window.onload(e => {
    themes.value = 1
})
window.addEventListener('load', () => {
    themes.value = 1
})
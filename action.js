import { calculate } from "./calc.js"

const allowedKeys = [
    '(', ')', '/', '*',
    '-', '+', '9', '8',
    '7', '6', '5', '4',
    '3', '2', '1', '0',
    '.', '%', ' '
]

document.querySelectorAll('.charKey').forEach(charKeyBtn => {    
    charKeyBtn.addEventListener('click', ()=>{
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', () =>{
    input.value = initialState
    input.focus()
})

input.addEventListener('keydown', ev => {
    ev.preventDefault()
    if(allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }

    if(ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    if(ev.key === "Enter") {
        calculate()
    }
})

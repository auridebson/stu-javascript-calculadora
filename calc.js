const resultInput = document.getElementById('result')
const input = document.getElementById('input')
const main = document.querySelector('main')
const root = document.querySelector(':root')
const initialState = ''

export function calculate() {
    resultInput.value = "ERROR"
    resultInput.classList.add('error')
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
    input.value = initialState
}

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyToClipboard').addEventListener('click', ev => {
    const button = ev.currentTarget
    if(button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add("success")
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove("success")
    }
})

document.getElementById('themeSwitcher').addEventListener('click', ()=> {
    if(main.dataset.theme === 'dark') {
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        main.dataset.theme = "light"
  } else {
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = "dark"
  }
    
})
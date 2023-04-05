const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleTryClick(event) {
    event.preventDefault ()

    const inputNumber = document.querySelector("#inputNumber")
    
    if (inputNumber.value > 10) {
        alert("please insert a number between 0 and 10")
        
        console.log(inputNumber.value)
    }
    
    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen() 
        screen2.querySelector("h2").innerText = (`you got it in ${xAttempts} attempts`)
    }

    inputNumber.value = ""
    xAttempts++
} 

function handleResetClick() {
   toggleScreen() 
   xAttempts = 1
   randomNumber = Math.round(Math.random() * 10)
}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle('hide')
}
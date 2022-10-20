// create function for each operation: add, subtract, multiply and divide
// helper functions

// operator = operator.toLowerCase()



function add(num1, num2){
return num1 + num2
}


//console.log(add(1,2))

function subtract(num1, num2){
    return num1 - num2
}

function multiply (num1, num2){
    return num1 * num2
}

function divide (num1, num2){
    return num1 / num2
}
//console.log(divide (1,2))

//create a function named operate that takes in 3 parameters: 
//2 numbers and the operation to be performed 

function operator(num1, num2, operator){
    if(operator === 'add'){
    return add(num1, num2)
}
else if(operator === 'subtract'){
return subtract(num1, num2)
}
else if (operator === 'multiply'){
    return multiply(num1, num2)
}
else if(operator === 'divide'){
    return divide(num1, num2)
}
else {
    return 'error operator not recognized'
}


}

//variable to hold value from form inputs
let num1 = 0
let num2 = 0
let operatorButtonVal = ''
// function that runs when the equal button is clicked using onclick

function equalsClicked(){
    //saving the number value of the first input to num1
 num1 = document.querySelector('#num1').value
 num2 = document.querySelector('#num2').value


 //pareIn changes num1 data type to number
 num1 = parseInt(num1)
 num2 = parseInt(num2)

 operatorButtonVal = document.querySelector('#operator').value


const results = document.getElementById('result-num')

const numResult = operator(num1,num2, operatorButtonVal)

console.log(num1, num2, operatorButtonVal)


results.textContent = numResult


}






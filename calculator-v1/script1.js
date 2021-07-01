//calculator


//buttons
const buttons = [];

function createButton() {
    forEach (i = 0; i < 9; i++) {
        num.addEventListener("click", () => {
            //set num1 to what was pressed first
            let num1 = buttons[i];
        })
        
    }
}
//need to connect buttons to numbers

//math operators
function add(num1, num2) {
    console.log(num1 + num2);
}

function subtract(num1, num2) {
    console.log(num1 - num2);
}

function multiply(num1, num2) {
    console.log(num1 * num2);
}

function divide(num1, num2) {
    let result = 
    console.log(num1 / num2);
}

//problem: need to be able to collapse num1 and result into same variable. Need to initialize result as 0 or empty value (undefined).
//possible: update num1 to equal result after operation is completed

//create variable result

//I can use HTML+CSS to create calculator interface


//create a loop to addEventListener to each numerical button to assign corresponding values?

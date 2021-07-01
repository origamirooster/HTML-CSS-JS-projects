class Calculator { 
    constructor(previousOperandTextElement, currentOperandTextElement) {                                    //creates calculator with prev and current operands
        this.previousOperandTextElement = previousOperandTextElement                    
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()                                                                                        //ensures that calculator is cleared upon construction
    }
   
   
    //                                                                                                      //the following functions are called by clicking the buttons

    clear() {
        this.currentOperand = ''                                                                            //both operands are empty strings, while the operation is undefined (not selected)
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)                                   //delete the last digit entered    ********
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return                                     //prevents typing more than one decimal in each string
        this.currentOperand = this.currentOperand.toString() + number.toString()                        
    }

    chooseOperation(operation) {                                                                            //innerText of the operationButton that was pressed is passed into (operation)
        if (this.currentOperand === '') return                                                              //if no operation button is pressed, operation remains undefined
        if (this.previousOperand !== '') {                                                                  //if there is a previous operand, conpute() is called
            this.compute()
        }
        //                                                                                                  //These next this. variables get passed into compute() below
        this.operation = operation                                                                      
        this.previousOperand = this.currentOperand                                                          //establishes the previous result as the current number to be operated on (operand)
        this.currentOperand = ''                                                                            //clears currentOperand to make space for new number to be typed. previousOperand gets to keep the value
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }



    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)               //currentOperandTextElement represents the displayed value in the HTML
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`                          //displays the previous operand and the selected operation on the top row
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}                                                                                                           //end of calculator class definition




const numberButtons = document.querySelectorAll('[data-number]')                                            //variables created from HTML elements with corresponding attributes
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')                        //previous/currentOperandTextElement represents the displayed value in the HTML
const currentOperandTextElement = document.querySelector('[data-current-operand]')                          //previous/currentOperand is the 


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)                    //variable representing the calculator object

numberButtons.forEach(button => {                                                                           //defines the functionality of each button
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)                                                           //button.innerText used to grab # from inside the button, to plug into (number)
        calculator.updateDisplay()                                                                          //display is updated accordingly each time any button is pressed
    })
})

operationButtons.forEach(button => {                                            
    button.addEventListener('click', () => {                                                                
        calculator.chooseOperation(button.innerText)                                                        //button.innerText used to grab operation from button, to plug into (operation)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

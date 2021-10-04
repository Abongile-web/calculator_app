
class Calculator {
    //values that will be displayed on my calculator 
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
    }

    //clear display 
    clear () {
        //new variable to display number button clicked
        this.currentOperandDisplayed = '';
    }

    //delete numbers
    delete() {

    }

    //append numbers to screen
    append(number) {
        this.currentOperandDisplayed = number;
        console.log(this.currentOperandDisplayed + '(append number)');
    }

    //choose operation calculations 
    chooseOperation(operation) {

    }

    //Do calculations when the equal button is pressed
    equals() {

    }

    //update the display 
    updateDisplay() {
        this.currentOperand.innerText = this.currentOperandDisplayed;
        console.log(this.currentOperand.innerText);
    }
}



//Select all numbers and operations
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperand = document.querySelector('[data-previous]');
const currentOperand = document.querySelector('[data-current]');

const calculator = new Calculator(previousOperand, currentOperand);

//When a number button is pressed, put it on the display 
numberButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        console.log(button.innerText + ' was clicked');

        calculator.append(button.innerText);
        calculator.updateDisplay();
    })
})
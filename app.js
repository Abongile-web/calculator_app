
class Calculator {
    //values that will be displayed on my calculator 
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
    }

    //clear display 
    clear () {
        this.currentOperand.innerText = '';
    }

    //delete numbers
    delete() {

    }

    //append numbers to screen
    append(number) {
        //Take button clicked and set it to equal new number variable
        // this.currentOperandDisplayed = number;
        // console.log(this.currentOperandDisplayed + '(append number)');

        this.currentOperand.innerText = number;
    }

    //choose operation calculations 
    chooseOperation(operation) {

    }

    //Do calculations when the equal button is pressed
    equals() {

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


//Make use of class
const calculator = new Calculator(previousOperand, currentOperand);


//When a number button is pressed, put it on the display 
numberButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        calculator.append(button.innerText);
    })
})


//Clear all numbers on screen
allClearButton.addEventListener('click', ()=> {
    console.log("clear button was clicked");
    calculator.clear();
});
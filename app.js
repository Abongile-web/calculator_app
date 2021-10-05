
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
        this.currentOperand.innerText = this.currentOperand.innerText.slice(0, -1);
        console.log(this.currentOperand.innerText);
    }

    //append numbers to screen
    append(number) {
        //if number already has "." or if it equals "." then do nothing 
        if (currentOperand.innerText.includes('.') && number === '.') {
            return;
        }

        //convert number passed plus current number to string so that they go next to each other (instead of replacing each other) when buttons are pressed 
        this.currentOperand.innerText = this.currentOperand.innerText.toString() + number.toString();

    }

    //choose operation calculations 
    chooseOperation(operation) {
        //if last character of current display equals operation pressed, then do nothing 
        if (currentOperand.innerText.slice(-1) === operation.innerText) {
            console.log("operation is already here");
            return;
        }

        //Add operation selected to the screen
        this.currentOperand.innerText = this.currentOperand.innerText.toString() + operation.innerText.toString();
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
    calculator.clear();
});


//When an operation button is clicked, put it on display
operationButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.chooseOperation(button);
    })
})


//When Delete button is selected, remove a character from previous display 
deleteButton.addEventListener('click', ()=> {
    calculator.delete();
})
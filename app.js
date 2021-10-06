
class Calculator {
    //values that will be displayed on my calculator 
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
    }

    //clear display 
    clear () {
        this.currentOperand.innerText = '';
        this.previousOperand.innerText = '';
    }

    //delete numbers
    delete() {
        this.currentOperand.innerText = this.currentOperand.innerText.slice(0, -1);
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
        //if there is already a value in the previous screen, perform what is in the statement 
        if (this.previousOperand.innerText != '') {
            //if the current display is nothing, then do nothing (prevents user from double clicking operation)
            if (this.currentOperand.innerText == '') {
                return;
            }
            
        }

        //Add operation selected to the previous screen
        this.previousOperand.innerText = this.previousOperand.innerText + this.currentOperand.innerText.toString() + operation.innerText.toString();

        //make current display equals nothing 
        this.currentOperand.innerText = '';
    }

    //Do calculations when the equal button is pressed
    equals() {
        //add current display number to previous display 
        this.previousOperand.innerText = this.previousOperand.innerText + this.currentOperand.innerText.toString();

        //make current display be the result of previous display calculations
        this.currentOperand.innerText = eval(this.previousOperand.innerText);

        //clear previous display 
        this.previousOperand.innerText = '';

        console.log(this.previousOperand.innerText);
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


//When Equals button is selected, do calculations of current display 
equalsButton.addEventListener('click', ()=> {
    calculator.equals();
})
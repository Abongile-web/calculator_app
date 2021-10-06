
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
        console.log(this.currentOperand.innerText);
    }

    //append numbers to screen
    append(number) {
        console.log(this.previousOperand.innerText + typeof this.previousOperand.innerText);
        console.log(this.currentOperand.innerText + typeof this.currentOperand.innerText);
        //if number already has "." or if it equals "." then do nothing 
        if (currentOperand.innerText.includes('.') && number === '.') {
            return;
        }

        //convert number passed plus current number to string so that they go next to each other (instead of replacing each other) when buttons are pressed 
        this.currentOperand.innerText = this.currentOperand.innerText.toString() + number.toString();

    }

    //choose operation calculations 
    chooseOperation(operation) {
        //if there is already a value in the previous screen, do calculation of number in previous screen and number of current screen 
        if (this.previousOperand.innerText != '') {
            //convert them to numbers 
            let previous = parseFloat(this.previousOperand.innerText);
            let current = parseFloat(this.currentOperand.innerText);
            let operationValue = operation.innerText;
            let answer;
            
            //whatever operation is, perform that calculation
            switch (operationValue) {
                case '+':
                    answer = previous + current;
                    console.log(answer);
                    //make previous display equal the answer and selected operation 
                    this.previousOperand.innerText = answer + operationValue;
                    //clear current display
                    this.currentOperand.innerText = '';
                    return;
                    break;
                case '-':
                    answer = previous - current;
                    console.log(answer);
                    //make previous display equal the answer and selected operation 
                    this.previousOperand.innerText = answer + operationValue;
                    //clear current display
                    this.currentOperand.innerText = '';
                    return;
                    break;
                case '*':
                    answer = previous * current;
                    console.log(answer);
                    //make previous display equal the answer and selected operation 
                    this.previousOperand.innerText = answer + operationValue;
                    //clear current display
                    this.currentOperand.innerText = '';
                    return;
                    break;
                case '÷':
                    answer = previous / current;
                    console.log(answer);
                    //make previous display equal the answer and selected operation 
                    this.previousOperand.innerText = answer + operationValue;
                    //clear current display
                    this.currentOperand.innerText = '';
                    return;
                    break;

            }
        }

        //Add operation selected to the previous screen
        this.previousOperand.innerText = this.currentOperand.innerText.toString() + operation.innerText.toString();

        //make current display equals nothing 
        this.currentOperand.innerText = '';
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


//When Equals button is selected, do calculations of current display 
equalsButton.addEventListener('click', ()=> {
    calculator.equals();
})
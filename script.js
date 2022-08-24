function calculator(){
    //*Query selectors and variables here
    const display = document.querySelector('.disp');
    const nums = document.querySelectorAll('.num');
    const operators = document.querySelectorAll('.op');

    let numPress;


    //* Basic calc functions here
    const add = (x, y) => (x + y);

    const subtract = (x, y) => (x - y);

    const multiply = (x, y) => (x * y);

    const divide = (x, y) => (x / y);

    const operate = (operator, num1, num2) => {
        return operator(num1, num2);
    };


    //* Display functions
    let dispValue = [];

    function keyPress(e){

        //! Need to add evaluators for type of keyPress
        numPress = e.currentTarget.getAttribute('id');

        dispValue.push(numPress);


        //! Iterate over dispValue to remove commas
        display.textContent = `${dispValue}`;

    }


    nums.forEach(press => press.addEventListener('click', keyPress));
    operators.forEach(press => press.addEventListener('click', keyPress));


}

calculator();
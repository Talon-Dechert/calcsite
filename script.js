function calculator(){
    //*Query selectors and variables here
    const display = document.querySelector('.disp');
    const nums = document.querySelectorAll('.num');
    const operators = document.querySelectorAll('.op');

    let chosenKeyId;
    let chosenKeyClass;

    let dispValue = "";

    let tempValues = "";

    let storedValues = [];

    let evaluated;

    //* Basic calc functions here
    const add = (x, y) => (x + y);

    const subtract = (x, y) => (x - y);

    const multiply = (x, y) => (x * y);

    const divide = (x, y) => (x / y);

    const operate = (num1, operator, num2) => {
        return operator(num1, num2);
    };

    const updateValues = (array) => {
        evaluated = operate(array.shift(), array.shift(), array.shift());
        return array.unshift(evaluated);
    }


    //* Display functions

    function displaySymbol(keyId){
        switch (keyId) {
            case 'add':
                return "+";
            case 'subtract':
                return "-";
            case 'multiply':
                return "x";
            case 'divide':
                return "/";
            default:
                return keyId;
        }
    }

    function keyPress(e){

        chosenKeyId = e.currentTarget.getAttribute('id');
        chosenKeyClass = e.currentTarget.getAttribute('class');

        // console.log(chosenKeyClass);

        //! Need to figure out alternative response
        if (dispValue.length < 14){
            dispValue += displaySymbol(chosenKeyId);
            
            switch (chosenKeyClass) {
                case 'num':
                tempValues += chosenKeyId;
                break;
                
            case 'num zero':
                tempValues += chosenKeyId;
                break;
                    
            case 'op':
                storedValues.push(tempValues);
                storedValues.push(chosenKeyId)
                tempValues = "";
                break;
            }
        }


        //!Final operation should only display once storedValues has only one item and execute only if storedValues has three or more items


        //* Display as a string

        display.textContent = `${dispValue}`;

        console.log("Temp value is: " + tempValues);
        console.log("Stored values: " + storedValues);

    }


    nums.forEach(press => press.addEventListener('click', keyPress));
    operators.forEach(press => press.addEventListener('click', keyPress));


}

calculator();
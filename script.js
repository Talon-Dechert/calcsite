

function calculator(){
    //*Query selectors and variables here
    const display = document.querySelector('.disp');
    const calcButtons = document.querySelectorAll("button");
    // const nums = document.querySelectorAll('.num');
    // const operators = document.querySelectorAll('.op');

    let chosenKeyId;
    let chosenKeyClass;
    let dispValue = "";
    let tempValues = "0";
    let storedValues = [];
    let evaluated;
    let num1;
    let num2;

    //* Basic calc functions here
    const add = (x, y) => (x + y);

    const subtract = (x, y) => (x - y);

    const multiply = (x, y) => (x * y);

    const divide = (x, y) => (x / y);

    // const operate = (stNum1, operator, stNum2) => {
    //     num1 = parseFloat(stNum1);
    //     num2 = parseFloat(stNum2);
    //     switch (operator){
    //         case "add":
    //             return `${add(num1, num2)}`;
    //         case "subtract":
    //             return `${subtract(num1, num2)}`;
    //         case "multiply":
    //             return `${multiply(num1, num2)}`;
    //         case "divide":
    //             return `${divide(num1, num2)}`;
    //     }
    // };

    // const updateValues = (array) => {
    //     evaluated = operate(array.shift(), array.shift(), array.shift());
    //     array.unshift(evaluated);
    // }


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

        switch (chosenKeyId) {
            case 'clear':
                storedValues = [];
                tempValues = "";
                dispValue = "";
                break;
            case 'equals':
                // storedValues.push(tempValues);
                // for (let i = storedValues.length; i > 1;) {
                //     updateValues(storedValues);
                //     if (storedValues.length == 1) break;
                // }
                // dispValue = storedValues[0];
                // tempValues = dispValue;
                // storedValues.shift();
                // break;
            default:

                
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
        }
        
        /*

        !BUGS

        ! Account for dividing by zero
        ! Adjust continued use of calc after equals sign is clicked
        ! Account for equals sign being pressed early
        ! Make sure decimals round to hundredths 
        ! Give functionality to decimal button
        ! Make sure decimal can only be used once per number
        ! Limit decimal places in evaluated results

        ! Change process of calculator to only have max two numbers at any one time?
        */


        //* Display as a string

        display.textContent = `${dispValue}`;

        console.log("Temp value is: " + tempValues);
        console.log("Stored values: " + storedValues);

    }


    calcButtons.forEach(press => press.addEventListener('click', keyPress));
    // nums.forEach(press => press.addEventListener('click', keyPress));
    // operators.forEach(press => press.addEventListener('click', keyPress));


}

calculator();
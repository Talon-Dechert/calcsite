

function calculator(){
    //*Query selectors and variables here
    const display = document.querySelector('.disp');
    const calcButtons = document.querySelectorAll("button");

    let chosenKeyId;
    let chosenKeyClass;

    let dispValue = "";
    let tempValues = "0";
    let storedValues = [];
    let opCheck = 0;
    let decCheck = 0;
    let errMess = 0;

    let tempOp = "";
    let newAnswer = 0;
    let evaluated;
    let num1;
    let num2;

    //* Basic calc functions here
    const add = (x, y) => (x + y);

    const subtract = (x, y) => (x - y);

    const multiply = (x, y) => (x * y);

    const divide = (x, y) => (x / y);

    const operate = (stNum1, operator, stNum2) => {
        num1 = parseFloat(stNum1);
        num2 = parseFloat(stNum2);
        switch (operator){
            case "add":
                return `${parseFloat((add(num1, num2)).toFixed(3))}`;
            case "subtract":
                return `${parseFloat((subtract(num1, num2)).toFixed(3))}`;
            case "multiply":
                return `${parseFloat((multiply(num1, num2)).toFixed(3))}`;
            case "divide":
                return `${parseFloat((divide(num1, num2)).toFixed(3))}`;
        }
    };

    const updateValues = (array) => {
        evaluated = operate(array.shift(), array.shift(), array.shift());
        array.unshift(evaluated);
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
            case 'decimal':
                return ".";
            default:
                return keyId;
        }
    }

    function keyPress(e){

        chosenKeyId = e.currentTarget.getAttribute('id');
        chosenKeyClass = e.currentTarget.getAttribute('class');

        if (errMess) {
            errMess = 0;
            tempOp += chosenKeyId;
            document.getElementById("clear").click();
            document.getElementById(`${tempOp}`).click();
            tempOp = "";
            return;
        };


        switch (chosenKeyId) {
            case 'clear':
                storedValues = [];
                tempValues = "";
                dispValue = "";
                opCheck = 0;
                decCheck = 0;
                newAnswer = 0;
                break;
            case 'equals':
                storedValues.push(tempValues);
                if (storedValues[2].length < 1){
                    storedValues.pop();
                    break;
                }
                if (storedValues[1] == "divide" && !parseFloat(storedValues[2])){
                    document.getElementById("clear").click();
                    dispValue = "ERROR"
                    errMess = 1;
                    break;
                }
                updateValues(storedValues);
                dispValue = storedValues[0];
                tempValues = dispValue;
                storedValues.shift();
                opCheck = 0;
                
                decCheck = 0;

                newAnswer = 1;
                break;
            default:

                
                //! Need to figure out alternative response
            if (dispValue.length < 14){
                if (chosenKeyClass == "dec" && decCheck) {
                    break;
                }
                dispValue += displaySymbol(chosenKeyId);
                
                switch (chosenKeyClass) {
                    case 'num':
                        tempOp += chosenKeyId;
                        if (newAnswer) {
                            document.getElementById("clear").click();
                            newAnswer = 0;
                            document.getElementById(`${tempOp}`).click();
                        } else {tempValues += chosenKeyId};
                        tempOp ='';
                        break;
                        
                    case 'num zero':
                        tempOp += chosenKeyId;
                        if (newAnswer) {
                            document.getElementById("clear").click();
                            newAnswer = 0;
                            document.getElementById(`${tempOp}`).click();
                        }
                        tempValues += tempOp;
                        tempOp = '';
                        break;

                    case 'dec':
                        if (!decCheck){
                            tempValues+= displaySymbol(chosenKeyId);
                            decCheck = 1;
                            newAnswer = 0;
                        }
                        break;
                            
                    case 'op':
                        if (!opCheck) {
                            storedValues.push(tempValues, chosenKeyId);
                            tempValues = "";
                            opCheck = 1;
                            decCheck = 0;
                            newAnswer = 0;

                        } else {
                            tempOp += chosenKeyId;
                            document.getElementById('equals').click();
                            if (errMess) {
                                tempOp = "";

                                break;
                            }
                            
                            document.getElementById(`${tempOp}`).click();
                            tempOp = "";
                        }

                        break;
                }
            }
        }
        
        /*

        !BUGS

        ! Prevent extra decimal after equals

        */


        //* Display as a string

        display.textContent = `${dispValue}`;

        console.log(`Temp Values: ${tempValues} Type: ${typeof(tempValues)}`);
        console.log(`Stored Values: ${storedValues} Type: ${typeof(storedValues)}`);

    }


    calcButtons.forEach(press => press.addEventListener('click', keyPress));


}

calculator();
function Calculator(){
    //!Query selectors and event listeners here
    const display = document.querySelector('.disp');



    //* Basic calc funcctions here
    const add = (x, y) => (x + y);

    const subtract = (x, y) => (x - y);

    const multiply = (x, y) => (x * y);

    const divide = (x, y) => (x / y);

    const operate = (operator, num1, num2) => {
        return operator(num1, num2);
    };






}
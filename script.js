function Calculator(){
    //*Query selectors here
    const display = document.querySelector('.disp');
    const keys = document.querySelectorAll('.key');


    //* Basic calc funcctions here
    const add = (x, y) => (x + y);

    const subtract = (x, y) => (x - y);

    const multiply = (x, y) => (x * y);

    const divide = (x, y) => (x / y);

    const operate = (operator, num1, num2) => {
        return operator(num1, num2);
    };

    




}
// const calculadora_app = document.getElementById('app-calculadora-exe');
// calculadora_app.addEventListener('click', function() {

// });

document.getElementById('app-calculadora-exe').addEventListener('click', function() {
    var calculadora = document.querySelector('.app-calculadora');
    var pantallaPrincipal = document.querySelector('.pantalla-principal');


    calculadora.style.display = 'flex';
    setTimeout(function() {
        calculadora.style.opacity = '1';
    }, 10);


    pantallaPrincipal.style.opacity = '0';
    setTimeout(function() {
        pantallaPrincipal.style.display = 'none';
    }, 500);
});

document.getElementById('app-calculadora-close').addEventListener('click', function() {
    var calculadora = document.querySelector('.app-calculadora');
    var pantallaPrincipal = document.querySelector('.pantalla-principal');

    calculadora.style.opacity = '0';
    setTimeout(function() {
        calculadora.style.display = 'none';
    }, 500);

    pantallaPrincipal.style.display = 'block';
    setTimeout(function() {
        pantallaPrincipal.style.opacity = '1';
    }, 10);
});

// aqui va la parte del backend del al calculadora
document.addEventListener('DOMContentLoaded', () => {
    const visor = document.getElementById('visor');
    let currentInput = '0';
    let operator = null;
    let previousInput = null;

    function updateVisor() {
        visor.value = currentInput;
    }

    function handleNumber(num) {
        if (currentInput === '0') {
            currentInput = num;
        } else {
            currentInput += num;
        }
        updateVisor();
    }

    function handleOperator(op) {
        if (op === 'AC') {
            currentInput = '0';
            operator = null;
            previousInput = null;
        } else if (op === '+/-') {
            currentInput = (parseFloat(currentInput) * -1).toString();
        } else if (op === '%') {
            currentInput = (parseFloat(currentInput) / 100).toString();
        } else {
            if (previousInput === null) {
                previousInput = currentInput;
                operator = op;
                currentInput = '0';
            } else {
                calculate();
                operator = op;
            }
        }
        updateVisor();
    }

    function calculate() {
        if (previousInput !== null && operator !== null) {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(previousInput) + parseFloat(currentInput);
                    break;
                case '-':
                    result = parseFloat(previousInput) - parseFloat(currentInput);
                    break;
                case '*':
                    result = parseFloat(previousInput) * parseFloat(currentInput);
                    break;
                case '/':
                    result = parseFloat(previousInput) / parseFloat(currentInput);
                    break;
            }
            currentInput = result.toString();
            operator = null;
            previousInput = null;
            updateVisor();
        }
    }

    document.querySelectorAll('.num-cal').forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.currentTarget.getAttribute('data-value');
            if (!isNaN(value) || value === '.') {
                handleNumber(value);
            } else if (value === '=') {
                calculate();
            } else {
                handleOperator(value);
            }
        });
    });

    updateVisor();
});
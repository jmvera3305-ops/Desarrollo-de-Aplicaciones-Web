const display = document.getElementById('display');
const powerBtn = document.getElementById('power-btn');
let isOn = true;

// con esta función sirve para prender y apagar la calculadora 
function togglePower() {
    isOn = !isOn; 

if (isOn) {
        display.value = '0'; 
        display.style.backgroundColor = ''; // cuando está encendida
    if (powerBtn) powerBtn.style.backgroundColor = 'red'; 
    } else {
        display.value = ''; // se vacia la pantalla al apagar
        display.style.backgroundColor = '#f8f8f69f'; // se apaga la pantalla
    if (powerBtn) powerBtn.style.backgroundColor = '#050505'; // Botón cambia de color negro al apagar
    }
}

// Se agregan números u operadores a la pantalla
function appendValue(value) {
    if (!isOn) return;

    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Se limpia la pantalla completa 
function clearDisplay() {
    if (!isOn) return;
    display.value = '0';
}

// Borra el último carácter
function deleteLast() {
    if (!isOn) return;

    if (display.value.length === 1 || display.value === 'Error') {
        display.value = '0'; 
    } else {
        display.value = display.value.slice(0, -1);
    }
}

// Se calcula el resultado de la expresión
function calculate() {
    if (!isOn) return;

    try {
        let expresion = display.value.replace(/x/g, '*').replace(/÷/g, '/');
        display.value = eval(expresion);
    } catch (error) {
        display.value = 'Error';
    }
}
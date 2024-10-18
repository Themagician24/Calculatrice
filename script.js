// Sélection des éléments du DOM
const displayContainer = document.querySelector('.display');
const displayExpression = document.querySelector('.display .expression');
const displayResult = document.querySelector('.display .result');

// Vérifie si le résultat est caché
const isResultHidden = () => displayResult.classList.contains('hidden');

// Écoute les clics sur les boutons
document.querySelectorAll('.button').forEach(button => 
    button.addEventListener('click', () => handleButtonClick(button))
);

function handleButtonClick(button) {
    switch (button.innerHTML) {
        case 'C': {
            clearDisplay();
            break;
        }

        case '=': {
            evaluateExpression();
            break;
        }

        default: {
            updateExpression(button.innerHTML);
            break;
        }
    }
}

function clearDisplay() {
    displayExpression.innerHTML = '0';
    displayResult.classList.add('hidden');
}

function updateExpression(value) {
    if (displayExpression.innerHTML === '0' || isResultHidden()) {
        displayExpression.innerHTML = value === '00' ? '0' : value;
    } else {
        displayExpression.innerHTML += value;
    }
    updateResult();
}

function evaluateExpression() {
    try {
        const result = eval(displayExpression.innerHTML);
        displayResult.classList.remove('hidden');
        displayResult.innerHTML = result;
        displayResult.style.color = 'green'; // Couleur du résultat
        console.log(`= ${result}`); // Affiche dans la console
    } catch {
        displayResult.innerHTML = '';
        displayResult.style.color = 'green'; // Couleur de l'erreur
    }
}

function updateResult() {
    try {
        const result = eval(displayExpression.innerHTML);
        displayResult.classList.remove('hidden');
        displayResult.innerHTML = result;
        displayResult.style.color = 'red'; // Couleur du résultat
    } catch {
        displayResult.innerHTML = '';
        displayResult.style.color = 'red'; // Couleur de l'erreur
    }
}

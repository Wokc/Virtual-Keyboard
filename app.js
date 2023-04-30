let mainElem = document.querySelector('.main-wrapper');

let main = document.createElement('main');
main.className = 'keyboard';
mainElem.appendChild(main);

let inputElem = document.createElement('input');
inputElem.className = 'input';
inputElem.type = 'text';
inputElem.autofocus = 'autofocus';
inputElem.autocomplete = 'on';
main.appendChild(inputElem);

let row1 = document.createElement('div');
row1.className = 'row1';
main.appendChild(row1);

let row2 = document.createElement('div');
row2.className = 'row2';
main.appendChild(row2);

let row3 = document.createElement('div');
row3.className = 'row3';
main.appendChild(row3);

let row4 = document.createElement('div');
row4.className = 'row4';
main.appendChild(row4);

let row5 = document.createElement('div');
row5.className = 'row5';
main.appendChild(row5);

function newKey(name, keyClassName) {
    let button = document.createElement('div');
    button.innerText = name;
    button.className = `button`;
    button.id = name;
    keyClassName.appendChild(button);

    button.addEventListener('click', () => addclass(button));
}

let keysArr = [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
    'tab',
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '[',
    ']',
    '\\',
    'del',
    'caps',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    ';',
    "'",
    'Enter',
    'shift',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    ',',
    '.',
    '/',
    '↑',
    'shift',
    'Ctrl',
    'Win',
    'Alt',
    ' ',
    'Alt',
    'Ctrl',
    '←',
    '↓',
    '→',
];

for (let i = 0; i < keysArr.length; i++) {
    if (i <= 13) {
        newKey(keysArr[i], row1);
    } else if (i <= 28 && i > 13) {
        newKey(keysArr[i], row2);
    } else if (i <= 41 && i > 28) {
        newKey(keysArr[i], row3);
    } else if (i <= 54 && i > 41) {
        newKey(keysArr[i], row4);
    } else if (i <= 65 && i > 54) {
        newKey(keysArr[i], row5);
    }
}

function addclass(but) {
    inputElem.focus();
    inputElem.value += but.id;
    console.log(but);
    but.classList.toggle('active');
    but.classList.toggle('active');
}

document.addEventListener('keydown', () => keydown(event.key));
document.addEventListener('keyup', () => keydown(event.key));

function keydown(but) {
    inputElem.focus();
    document.getElementById(but).classList.toggle('active');
}

// button.addEventListener('keydown', () => addclass(button));
// button.addEventListener('keyup ', () => addclass(button));

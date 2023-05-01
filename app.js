let mainElem = document.querySelector('.main-wrapper');

let main = document.createElement('main');
main.className = 'keyboard';
mainElem.appendChild(main);

let inputElem = document.createElement('textarea');
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
    button.id = name.toLowerCase();
    if (
        name == 'Backspace' ||
        name == 'Tab' ||
        name == 'del' ||
        name == 'CapsLock' ||
        name == 'Enter' ||
        name == 'shift' ||
        name == 'Ctrl' ||
        name == 'Alt' ||
        name == '↑' ||
        name == '←' ||
        name == '→' ||
        name == '↓'
    ) {
        button.classList.add('special');
    }
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
    'Tab',
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
    'delete',
    'CapsLock',
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
    console.log();
    inputElem.focus();
    if (
        but.id != 'backspace' &&
        but.id != 'tab' &&
        but.id != 'del' &&
        but.id != 'win' &&
        but.id != 'capslock' &&
        but.id != 'enter' &&
        but.id != 'shift' &&
        but.id != 'ctrl' &&
        but.id != 'alt' &&
        but.id != '↑' &&
        but.id != '←' &&
        but.id != '→' &&
        but.id != '↓'
    ) {
        if (event.getModifierState('CapsLock')) {
            inputElem.value += but.id.toUpperCase();
        } else {
            inputElem.value += but.id;
        }
    } else if (but.id == 'tab') {
        inputElem.value += '\t';
    } else if (but.id == 'backspace') {
        inputElem.value = inputElem.value.slice(0, -1);
    } else if (but.id == 'del') {
        let nowPos = inputElem.selectionStart;
        inputElem.value =
            inputElem.value.substring(0, inputElem.selectionStart) +
            inputElem.value.substring(inputElem.selectionEnd + 1, inputElem.value.length);
        inputElem.selectionStart = nowPos;
        inputElem.selectionEnd = nowPos;
    } else if (but.id == 'enter') {
        inputElem.value =
            inputElem.value.substring(0, inputElem.selectionStart) +
            '\n' +
            inputElem.value.substring(inputElem.selectionEnd, inputElem.value.length);
        // } else if (but.id == 'CapsLock') {
        //     inputElem.value =
        //         inputElem.value.substring(0, inputElem.selectionStart) +
        //         '\n' +
        //         inputElem.value.substring(inputElem.selectionEnd, inputElem.value.length);
    }
    console.log(but);
    but.classList.toggle('active');
    but.classList.toggle('active');
}

document.addEventListener('keydown', () => keydown(event, event.key));
document.addEventListener('keyup', () => keyup(event, event.key));

function keydown(event, but) {
    console.log(but);
    but = but.toLowerCase();
    let buttton = document.getElementById(but);
    console.log(buttton.classList.contains('special'));
    if (event.getModifierState('CapsLock') && buttton.classList.contains('special') == false) {
        but = but.toLowerCase();
    }

    inputElem.focus();
    if (document.getElementById(but).id == 'tab') {
        event.preventDefault();
        inputElem.value += '\t';
        document.getElementById(but).classList.add('active');
    } else {
        document.getElementById(but).classList.add('active');
    }
}

function keyup(event, but) {
    but = but.toLowerCase();
    let buttton = document.getElementById(but);
    if (event.getModifierState('CapsLock') && buttton.classList.contains('special') == false) {
        but = but.toLowerCase();
    }
    document.getElementById(but).classList.remove('active');
}
// button.addEventListener('keydown', () => addclass(button));
// button.addEventListener('keyup ', () => addclass(button));

// массивы с символами для 2-х раскладок

let idArr = [
    'Backquote',
    'Digit1',
    'Digit2',
    'Digit3',
    'Digit4',
    'Digit5',
    'Digit6',
    'Digit7',
    'Digit8',
    'Digit9',
    'Digit0',
    'Minus',
    'Equal',
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
    'BracketLeft',
    'BracketRight',
    'Backslash',
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
    'Semicolon',
    'Quote',
    'Enter',
    'shift',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    'Comma',
    'Period',
    'Slash',
    'ArrowUp',
    'shift',
    'Control',
    'Win',
    'Alt',
    'Space',
    'Alt',
    'Control',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
];

let keysArr = [
    ['`', '~'],
    ['1', '!'],
    ['2', '@'],
    ['3', '#'],
    ['4', '$'],
    ['5', '%'],
    ['6', '^'],
    ['7', '&'],
    ['8', '*'],
    ['9', '('],
    ['0', ')'],
    ['-', '_'],
    ['=', '+'],
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
    ['[', '{'],
    [']', '}'],
    ['\\', '|'],
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
    [';', ':'],
    ["'", '"'],
    'Enter',
    'shift',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    [',', '<'],
    ['.', '>'],
    ['/', '?'],
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

let keyArrRus = [
    'ё',
    ['1', '!'],
    ['2', '"'],
    ['3', '№'],
    ['4', ';'],
    ['5', '%'],
    ['6', ':'],
    ['7', '?'],
    ['8', '*'],
    ['9', '('],
    ['0', ')'],
    ['-', '_'],
    ['=', '+'],
    'Backspace',
    'Tab',
    'й',
    'ц',
    'у',
    'к',
    'е',
    'н',
    'г',
    'ш',
    'щ',
    'з',
    'х',
    'ъ',
    ['\\', '/'],
    'delete',
    'CapsLock',
    'ф',
    'ы',
    'в',
    'а',
    'п',
    'р',
    'о',
    'л',
    'д',
    'ж',
    'э',
    'Enter',
    'shift',
    'я',
    'ч',
    'с',
    'м',
    'и',
    'т',
    'ь',
    'б',
    'ю',
    ['.', ','],
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

// let altENKeysArr = [
//     '~',
//     '!',
//     '@',
//     '#',
//     '$',
//     '%',
//     '^',
//     '&',
//     '*',
//     '(',
//     ')',
//     '_',
//     '+',
//     '{',
//     '}',
//     '|',
//     ':',
//     '"',
//     '<',
//     '>',
//     '?',
// ];

// let altRUKeysArr = [
//     '',
//     '!',
//     '"',
//     '№',
//     ';',
//     '%',
//     ':',
//     '?',
//     '*',
//     '(',
//     ')',
//     '_',
//     '+',
//     '',
//     '',
//     '/',
//     '',
//     '',
//     '',
//     '',
//     ',',
// ];

// создание основых элементов html

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

let switcher = document.createElement('span');
switcher.className = 'switcher';
switcher.innerText = 'lang: en';
main.appendChild(switcher);

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

// раскладка клавиатуры

let lang = 'en';

// создание кнопок клавиатуры

function newKey(name, keyClassName, keysArr) {
    let wrapper = document.createElement('div');
    wrapper.className = 'button-main';
    keyClassName.appendChild(wrapper);

    let button = document.createElement('div');
    // console.log(keysArr);
    // создание доп кнопок для шифта

    if (Array.isArray(name)) {
        mainName = name[0];
        altName = name[1];
        button.innerText = mainName;
        button.className = `button extraBut`;

        button.id = keysArr.toLowerCase();
        wrapper.appendChild(button);
        createAltButton(altName);
    } else {
        button.innerText = name;

        button.id = keysArr.toLowerCase();
        wrapper.appendChild(button);
    }

    // присвоение доп класса функциональным кнопкам

    if (
        name == 'Backspace' ||
        name == 'Tab' ||
        name == 'del' ||
        name == 'CapsLock' ||
        name == 'Enter' ||
        name == 'shift' ||
        name == 'Control' ||
        name == 'Alt' ||
        name == '↑' ||
        name == '←' ||
        name == '→' ||
        name == '↓'
    ) {
        button.classList.add('special');
    }

    function createAltButton(name) {
        let span = document.createElement('span');
        span.innerText = name;
        span.className = `altButton`;
        wrapper.appendChild(span);
    }
    button.addEventListener('click', () => addclass(button));
}

let Arr; // инициализация переменных для раскладки
if (lang == 'en') {
    Arr = keysArr;
} else {
    switcher.innerText = 'lang: rus';
    Arr = keyArrRus;
}
// проверка раскладки
function chageLang() {
    if (lang == 'en') {
        lang = 'ru';
        Arr = keyArrRus;
        switcher.innerText = 'lang: rus';
        row1.innerHTML = '';
        row2.innerHTML = '';
        row3.innerHTML = '';
        row4.innerHTML = '';
        row5.innerHTML = '';
        createKeyboard(Arr);
    } else {
        lang = 'en';
        Arr = keysArr;
        switcher.innerText = 'lang: en';
        row1.innerHTML = '';
        row2.innerHTML = '';
        row3.innerHTML = '';
        row4.innerHTML = '';
        row5.innerHTML = '';
        createKeyboard(Arr);
    }
}

// разделение кнопок по рядам и вызов функции создания кнопок
function createKeyboard() {
    for (let i = 0; i < Arr.length; i++) {
        if (i <= 13) {
            newKey(Arr[i], row1, idArr[i]);
        } else if (i <= 28 && i > 13) {
            newKey(Arr[i], row2, idArr[i]);
        } else if (i <= 41 && i > 28) {
            newKey(Arr[i], row3, idArr[i]);
        } else if (i <= 54 && i > 41) {
            newKey(Arr[i], row4, idArr[i]);
        } else if (i <= 65 && i > 54) {
            newKey(Arr[i], row5, idArr[i]);
        }
    }
}
createKeyboard();
//
document.onkeydown = function (event) {
    if (event.key == 'Shift') {
        document.onkeyup = function (event) {
            if (event.code) {
                console.log(event.key);
                console.log(but);
                inputElem.value += but.nextSibling.textContent;
            } else {
                document.onkeyup = null;
            }
        };
    }
};
let capsLockStatus;

function addclass(but) {
    // console.log(but.innerHTML == false, document.getElementById(event.key));
    // if (but.innerHTML == false) {
    //     but = document.getElementById(event.key);
    // }

    // but = event.key;
    // console.log(but);
    if (capsLockStatus == undefined) {
        capsLockStatus = event.getModifierState('CapsLock');
    }
    inputElem.focus();
    if (
        but.id != 'backspace' &&
        but.id != 'tab' &&
        but.id != 'delete' &&
        but.id != 'win' &&
        but.id != 'capslock' &&
        but.id != 'enter' &&
        but.id != 'shift' &&
        but.id != 'control' &&
        but.id != 'alt' &&
        but.id != '↑' &&
        but.id != '←' &&
        but.id != '→' &&
        but.id != '↓'
    ) {
        if (capsLockStatus) {
            inputElem.value += but.textContent.toUpperCase();
        } else {
            inputElem.value += but.textContent;
        }
    } else if (but.id == 'tab') {
        inputElem.value += '\t';
    } else if (but.id == 'backspace') {
        inputElem.value = inputElem.value.slice(0, -1);
    } else if (but.id == 'delete') {
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
    } else if (but.id == 'capslock') {
        if (capsLockStatus == true) {
            capsLockStatus = false;
        } else {
            capsLockStatus = true;
        }
    }
    // else if (but.id == 'Control') {

    // }

    but.parentNode.classList.toggle('active');
    setTimeout(() => but.parentNode.classList.toggle('active'), 300);
}

// function keydown(event, but) {
//     console.log(event, but);
//     event.preventDefault();
//     if (capsLockStatus == undefined) {
//         capsLockStatus = event.getModifierState('CapsLock');
//     }

//     but = but.toLowerCase();

//     if (but == 'control') {
//         but = 'ctrl';
//     }
//     console.log(but);
//     let buttton = document.getElementById(but);

//     if (capsLockStatus && buttton.classList.contains('special') == false) {
//         but = but.toLowerCase();
//     }

//     // inputElem.focus();
//     // if (document.getElementById(but).id == 'tab') {
//     //     event.preventDefault();
//     //     inputElem.value += '\t';
//     // } else if (buttton.id == 'capslock') {
//     //     event.preventDefault();
//     //     if (capsLockStatus == true) {
//     //         capsLockStatus = false;
//     //     } else {
//     //         capsLockStatus = true;
//     //     }
//     //     // } else if (buttton.id == 'ctrl') {
//     //     //     event.preventDefault();
//     //     //     if (capsLockStatus == true) {
//     //     //         capsLockStatus = false;
//     //     //     } else {
//     //     //         capsLockStatus = true;
//     //     //     }
//     // }

//     // document.getElementById(but).classList.add('active');
//     console.log(buttton);
//     addclass(buttton);
// }

// function keyup(event, but) {
//     but = but.toLowerCase();
//     if (but == 'control') {
//         but = 'ctrl';
//     }

//     let buttton = document.getElementById(but);
//     if (event.getModifierState('CapsLock') && buttton.classList.contains('special') == false) {
//         but = but.toLowerCase();
//     }
//     document.getElementById(but).classList.remove('active');
// }

document.addEventListener('keydown', () => {
    // console.log(event.code, event.key);
    event.preventDefault();

    but = event.key;
    // console.log(but);

    but = document.getElementById(but.toLowerCase());
    if (but == null) {
        but = event.code;
        // console.log(but);
        but = document.getElementById(but.toLowerCase());
    }
    addclass(but);
});
// document.addEventListener('keyup', () => keyup(event, event.key));

function runOnKeys(func, ...args) {
    let arrChars = [];

    document.addEventListener('keydown', function (event) {
        if (event.repeat) return;
        arrChars.push(event.key);
    });

    document.addEventListener('keyup', function (event) {
        if (arrChars.length == 0) return;

        let runFunc = true;
        for (let arg of args) {
            if (!arrChars.includes(arg)) {
                runFunc = false;
                break;
            }
        }

        if (runFunc) {
            chageLang(lang);
        }
        arrChars.length = 0;
    });
}

runOnKeys(() => chageLang(lang), 'Control', 'Alt');

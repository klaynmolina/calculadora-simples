let historico = [];
// let historico;
const regexSinais = new RegExp(/[\+\-\*\/]$/);

const display = document.getElementById('display');

// document.addEventListener('keydown', e => console.log(e.key));
// document.addEventListener('click', e => console.log(e.target.innerHTML));

document.addEventListener("keydown", (pressed) => {
    const tecla = pressed.key;
    switch (tecla) {
        case 'Escape':
            display.textContent = 0;
            break;
        case 'Backspace':
            if (historico == "0") {
                display.textContent = 0;
            }
            display.textContent = historico.slice(0, historico.length - 1);
            historico = historico.slice(0, historico.length - 1);
            if (historico.length <= 0) {
                display.textContent = 0;
            }
            break;
        case 'Enter':
        case '=':
            if (display.textContent == 0) {
                display.textContent = 0;
                historico = display.textContent;
            } else {
                historico = display.textContent;
                display.textContent = calc = eval(historico);
                historico = 0;
            }
            break;
        case '/':
        case '*':
        case '*':
        case '-':
        case '+':
            if (display.textContent == 0) {
                display.textContent = 0;
                historico = display.textContent;
            } else {
                historico = display.textContent;
                if (regexSinais.test(historico[historico.length - 1])) {
                    return;
                }
                display.textContent = display.textContent + pressed.key;
            }
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (display.textContent == 0) {
                display.textContent = pressed.key;
                historico = display.textContent;
            }
            else if (historico == "0") {
                display.textContent = pressed.key;
            }
            else {
                display.textContent = display.textContent + pressed.key;
                historico = display.textContent;
            }
            break;
        default:
            break;
    }
});

document.addEventListener("click", (cliked) => {
    const mouse = cliked.target.innerHTML;

    switch (mouse) {
        case 'AC':
            display.textContent = 0;
            break;        
        case 'backspace':
            console.log(display.textContent)
            console.log(display.textContent[1])
            if (historico == "0") {
                display.textContent = 0;
            }
            display.textContent = historico.slice(0, historico.length - 1);
            historico = historico.slice(0, historico.length - 1);
            if (historico.length <= 0) {
                display.textContent = 0;
            }
            break;
        case '=':
            if (display.textContent == 0) {
                display.textContent = 0;
                historico = display.textContent;
            } else {
                historico = display.textContent;
                display.textContent = calc = eval(historico);
                historico = 0;
            }
            break;
        case '/':
        case '*':
        case '*':
        case '-':
        case '+':            
            if (display.textContent == 0) {
                display.textContent = 0;
                historico = display.textContent;
            } else {
                historico = display.textContent;
                if (regexSinais.test(historico[historico.length - 1])) {
                    return;
                }
                display.textContent = display.textContent + cliked.target.innerHTML;
            }
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (display.textContent == 0) {
                display.textContent = cliked.target.innerHTML;
                historico = display.textContent;
            }
            else if (historico == "0") {
                display.textContent = cliked.target.innerHTML;
            }
            else {
                display.textContent = display.textContent + cliked.target.innerHTML;
                historico = display.textContent;
            }
            break;
        default:
            break;
    }
});
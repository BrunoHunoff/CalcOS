const monitor = document.getElementById("monitor");

let num1 = 0;
let op = '';
let num2 = 0
let resultado;

function tela(valor) {
    monitor.value += valor;
}

function operacao(valor){
    num1 = monitor.value;
    monitor.value = '';
    op = valor;
}

function percentual(){
    let num = monitor.value;
    num = num.replace(",", ".");
    num = parseFloat(num);
    num = num/100;
    num = String(num);
    num = num.replace(".", ",");
    monitor.value = num;
}

function changeSign(){
    let num = monitor.value;
    num = num.replace(",", ".");
    parseFloat(num);
    num = num * -1;
    monitor.value = String(num);
}

function calc(){
    num2 = monitor.value;
    monitor.value = '';
    num1 = num1.replace(",", ".");
    num2 = num2.replace(",", ".");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(op == 'mult'){
        resultado = num1 * num2;
    }
    else if(op == 'plus'){
        resultado = num1 + num2;
    }
    else if(op == 'minus'){
        resultado = num1 - num2;
    }
    else if(op == 'divisao'){
        resultado = num1 / num2;
    }

    resultado = String(resultado);
    resultado = resultado.replace(".", ",");
    monitor.value = resultado;
}
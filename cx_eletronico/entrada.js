const readlineSync = require('readline-sync');

function solicitarValor() {
    let valor;
    do {
        valor = readlineSync.questionInt('Informe o valor a ser sacado (inteiro positivo): ');
        if (valor <= 0) {
            console.log('Por favor, insira um valor positivo.');
        }
    } while (valor <= 0);
    return valor;
}

module.exports = { solicitarValor };
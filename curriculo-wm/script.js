let numeroSecreto;

function gerarNumeroSecreto() {
    let numeros = [];
    while (numeros.length < 4) {
        let numero = Math.floor(Math.random() * 10);
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
    return numeros.join('');
}

function fazerTentativa() {
    let tentativa = document.getElementById('tentativaInput').value;
    if (!validarTentativa(tentativa)) {
        alert("inserir 4 numeros diferentes");
        return;
    }

    let touros = 0;
    let vacas = 0;

    for (let i = 0; i < 4; i++) {
        if (tentativa[i] == numeroSecreto[i]) {
            touros++;
        } else if (numeroSecreto.includes(tentativa[i])) {
            vacas++;
        }
    }

    if (touros === 4) {
        document.getElementById('resultado').innerText = 'numero secreto correto';
    } else {
        document.getElementById('resultado').innerText = `${touros} touros e ${vacas} vacas.`;
    }
}

function validarTentativa(tentativa) {
    return /^\d{4}$/.test(tentativa) && new Set(tentativa).size === 4;
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    document.getElementById('resultado').innerText = '';
    document.getElementById('tentativaInput').value = '';
}

// aqui eh a função para chamar o começo do jogo 
window.onload = function() {
    reiniciarJogo();
};

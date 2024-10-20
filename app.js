let numeroSecreto  = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; // A propriedade innerHTML é responsável por alterar o conteúdo HTML desse elemento.
}

exibirTextoNaTela ('h1', 'Jogo do Número Secreto');
exibirTextoNaTela ('p', 'Escolha um Número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value; // '.value' essa propriedade irá armazenar o valor inserido dentro do campo input.
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Quase lá...');
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {    
            exibirTextoNaTela('h1', 'Quase lá...');
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1); // Math.random() * 10 + 1 cria um número aleatório entre 1 e 10. - > parseInt determina que será números inteiros.
    
}

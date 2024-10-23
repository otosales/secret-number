let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto  = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; // A propriedade innerHTML é responsável por alterar o conteúdo HTML desse elemento.
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela ('p', 'Escolha um Número entre 1 e 10');
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value; // '.value' essa propriedade irá armazenar o valor inserido dentro do campo input.
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); //document.getElementById pega o elemento único (ID), ou seja, diferente do document.querySelector, o document.getElementById, seleciona o ID do elemento. 

        //removeAttribute é responsável por remover o atributo 'disabled' do HTML. Ao usuário acertar o número secreto, o removeAttribute irá remover o disabled e ativar o botão Novo Jogo.

    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Quase lá...');
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {    
            exibirTextoNaTela('h1', 'Quase lá...');
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // Math.random() * 10 + 1 cria um número aleatório entre 1 e 10. - > parseInt determina que será números inteiros.
    
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); //push pega o elemento e joga pro final da lista.
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
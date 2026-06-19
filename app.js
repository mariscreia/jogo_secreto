
let numerosSorteados=[];
let limite = 10;
let numeroSecreto = geraNumero();
let tentativas=1;

function ExibirTextoNaTela(tag,texto) {
    let campo=document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    ExibirTextoNaTela("h1", "Bem Vindo ao jogo!");
    ExibirTextoNaTela("p", "Escolha um nome de 1 a 10: ");

}

mensagemInicial();
console.log(numeroSecreto);

function verificarChute() {
    let chute = document.querySelector("input").value;
    let resultado = tentativas>1? "tentativas": "tentativa";

    if (chute==numeroSecreto){
        ExibirTextoNaTela("h1","Parabens ^^");
        ExibirTextoNaTela("p","você acertou com "+tentativas+" "+resultado+"!");
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("chutar").setAttribute("disabled",true);
    }

    else{
        if (chute>numeroSecreto){
        ExibirTextoNaTela("h1","Quase...");
        ExibirTextoNaTela("p","Tente um numero menor");
        }

        if (chute<numeroSecreto){
        ExibirTextoNaTela("h1","Quase...");
        ExibirTextoNaTela("p","Tente um numero maior");
        }

        limparCampo();
        tentativas++;

    }
   
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value= " ";
}


function geraNumero() {
    let numeroEscolhido = parseInt(Math.random()*10 + 1);
    let quantidadeElementos = numerosSorteados.length;

    if (quantidadeElementos==limite) {
        numerosSorteados=[]
    }

    if (numerosSorteados.includes(numeroEscolhido)){
        return geraNumero();
    } else {
        numerosSorteados.push(numeroEscolhido)
        console.log(numerosSorteados)
        return numeroEscolhido;
    }

}

function novoJogo(){
    numeroSecreto = geraNumero();
    console.log(numeroSecreto);
    limparCampo();
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
    document.getElementById("chutar").removeAttribute("disabled");
    tentativas=1;
    
}

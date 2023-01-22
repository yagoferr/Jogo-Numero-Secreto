const menorValor = 1;
const maiorValor = 100;

const numeroSecreto = GeradorNumeroSecreto();
console.log(numeroSecreto);

function GeradorNumeroSecreto(){
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.textContent = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;



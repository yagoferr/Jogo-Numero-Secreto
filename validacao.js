function verificaSeOChuteEUmValorValido(chute){
    const numero = +chute;
    const menorValor = 1;
    const maiorValor = 100;

    if (chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>';

    }
    
    if (numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>Número inválido, fale um número entre ${menorValor} e ${maiorValor}</div>`;
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou</h2>
        <h3> O número secreto é ${numeroSecreto} <br>
        <button id="btn-jogar-novamente" class="btn-jogar">Jogar Novamente!</button>
        `
        const btnJogar = document.getElementById('btn-jogar-novamente');
        btnJogar.addEventListener('click', () => {
        window.location.reload()
    })
    } 
    
    if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div> O número secreto é menor do que ${numero}`
    } else {
        elementoChute.innerHTML += `<div> O número secreto é maior do que ${numero}`
    }

    function chuteInvalido(numero){
        return Number.isNaN(numero)
    }

    function numeroMaiorOuMenor(numero){
        return (numero > maiorValor || numero < menorValor)
    }

    
}
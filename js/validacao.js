function validacaoChute(chute) {
    const numero = +chute

    if(verificaNumero(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido: Não é um número</div>'
        return
    }

    if(verificaIntervalo(numero)) {
        elementoChute.innerHTML +=  `<div>Valor invalido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === random) {
        document.body.innerHTML =  `
        <h2>Você acertou!</h2>
        <h3>O número era ${random}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamnete</button>
        `

        reiniciaJogo()
    } else if(numero > random) {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>'
    } else {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>'

    }
}

function verificaNumero(numero) {
    return Number.isNaN(numero)
}

function verificaIntervalo(numero) {
    return numero > maiorValor || numero < menorValor
}

function reiniciaJogo(){
    const btn = document.getElementById('jogar-novamente')
    btn.addEventListener("click", () => {
        window.location.reload()
    })
}

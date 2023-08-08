const menorValor = 0
const maiorValor = 1000
const random = geraNumero()

// console.log(random)

function geraNumero() {
    return parseInt(Math.random() * maiorValor + 1)
}

// doom
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerText = maiorValor

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerText = menorValor

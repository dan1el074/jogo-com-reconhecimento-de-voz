const elementoChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', (e) => {
    const chuteRecognition = e.results[0][0].transcript
    const chute = corrigeNumeros(chuteRecognition)
    exibeChute(chute)
    validacaoChute(chute)
})

recognition.addEventListener('end', () => {
    recognition.start()
})

function exibeChute(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

const numeros = {
    'zero zero': 0,
    'zero': 0,
    '00': 0,
    '01': 1,
    'um': 1,
    'dois': 2,
    '02': 2,
    'três': 3,
    '03': 3,
    'quatro': 4,
    '04': 4,
    'cinco': 5,
    '05': 5,
    'seis': 6,
    '06': 6,
    'sete': 7,
    '07': 7,
    'oito': 8,
    '08': 8,
    'nove': 9,
    '09': 9,
    'dez': 10,
    'desce': 10,
    'sim': 100,
}

function corrigeNumeros(palavra) {
    for(numero in numeros){
        if(palavra === numero){
            palavra = numeros[numero];   
        }         
    }
    return palavra;
}

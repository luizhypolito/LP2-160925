let teste = []
let indiceMaior = 0
let indiceMenor = 0

for (i = 0; i < 5; i++) {

    let itens = prompt("Digite o valor do produto: ")
    teste.push(itens)
}

let maior = teste[0]
let menor = teste[0]

for (i = 0; i < 5; i++) {

    if (teste[i] > maior) {

        maior = teste[i]
        indiceMaior = i
    }

    if (teste[i] < menor) {

        menor = teste[i]
        indiceMenor = i
    }
}

console.log('O indice do produto maior é ${indiceMaior}')
console.log('O indice do produto menor é ${indiceMenor}')
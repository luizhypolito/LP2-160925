let teste  = []
let indiceMaior = 0

for(i = 0; i < 5; i++){

    let produtos = prompt("digite o produto pae")
    produtos = Number(produtos)
    teste.push(produtos)
}

let maior = 0

for(i = 0; i < 5; i++){

    if(teste[i] > maior){

        maior = teste[i]
        indiceMaior = i
    }
}

console.log(`O produto mais caro ${maior} e o indice dele é ${indiceMaior}`)

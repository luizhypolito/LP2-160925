let fitaderna = []

for( i = 0; i < 10 ; i++){

    let elementos = prompt("Digite a sequência de elementos \n EM CAIXA ALTA")
    fitaderna.push(elementos)

}

console.log("- Fita completa -")

for( i = 0; i < 10 ; i++){

    if(fitaderna[i] == "A"){
        console.log(fitaderna[i] +" == T")
    }

    if(fitaderna[i] == "C"){
        console.log(fitaderna[i] +" == G")
    }

    if(fitaderna[i] == "G"){
        console.log(fitaderna[i] +" == C")
    }

    if(fitaderna[i] == "T"){
        console.log(fitaderna[i] +" == A")
    }

}
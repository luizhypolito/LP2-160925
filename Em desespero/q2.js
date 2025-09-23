let tipos = []

for( i = 0; i < 10 ; i++){
    let sangue = prompt("Digite o tipo sanguíneo da pessoa: ")
    tipos.push(sangue)

}

for( i = 0; i < 10 ; i++){

    console.log("Indice da pessoa", i + 1 ,"Tipo sanguíneo: ", tipos[i])

}
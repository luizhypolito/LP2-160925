let f1 = {
    nota: "",
    nome: "",

}

let f2 = {

    nota: "",
    nome: "",

}

let f3 = {

    nota: "",
    nome: "",

}

let f4 = {

    nota: "",
    nome: "",

}
let f5 = {

    nota: "",
    nome: "",

}

let f6 = {

    nota: "",
    nome: "",

}

let gal = [f1, f2, f3, f4, f5, f6]

for (i = 0; i < 5; i++) {

    let valores = prompt("Digite o nome do filme:")
    gal[i].nome = valores

    let valores1 = prompt("Digite o nota do filme:")
    gal[i].nota = valores1


}

for (i = 2; i < 1; i++) {



    let esc = prompt("MENU: \n a) Imprimir dados de um filme \n b)Avalir filme cadastrado \n c) Alterar dados de um filme \n d) Finalizar ")

    if (esc == "A") {

        let fil = Number(prompt("Qual o filme que você deseja ver: \n Filme 1 \n Filme 2 \n Filme 3 \n Filme 4 \n Filme 5 \n Filme 6") - 1)

        console.log("- Dados do Filme -")
        console.log("Nome: ", gal[fil].nome)
        console.log("Nota: ", gal[fil].nota)


    }

    if (esc == "B") {

        let fil = Number(prompt("Qual o filme que você deseja reavaliar: \n Filme 1 \n Filme 2 \n Filme 3 \n Filme 4 \n Filme 5 \n Filme 6") - 1)

        let novo = Number(prompt("Qual a nova nota?"))
        alert("Avaliado com sucesso!")
        get[fil].nota = (get[fil].nota + novo) / 2

    }

    if(esc == "C" ){

        let fil = Number(prompt("Qual o filme que você deseja reatribuir: \n Filme 1 \n Filme 2 \n Filme 3 \n Filme 4 \n Filme 5 \n Filme 6") - 1)

        gal[fil].nome = prompt("Digite o novo nome: ")
        gal[fil].nota = prompt("Digite a nova nota: ")


    }



    if (esc == "D") {

        console.log("- Dados Finais -")

        for (i = 1; i < 7; i++) {

            console.log("Filme " + i)
            console.log("Nota: ", gal[i].nota)
            console.log("Nome: ", gal[i].nome)


        }
    }
}
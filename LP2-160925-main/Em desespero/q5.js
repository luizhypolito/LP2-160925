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

    let valores1 = Number(prompt("Digite o nota do filme:"));
    gal[i].nota = valores1


}


function menu() {

    
    
    let esc = prompt("MENU: \n a) Imprimir dados de um filme \n b)Avalir filme cadastrado \n c) Alterar dados de um filme \n d) Finalizar ")

    if (esc == "A") {

        let fil = Number(prompt("Qual o filme que você deseja ver: \n Filme 1 \n Filme 2 \n Filme 3 \n Filme 4 \n Filme 5 \n Filme 6") - 1)

        alert(`- Dados do Filme - \n Nome: ${gal[fil].nome} \n Nota: ${gal[fil].nota}`  )

        let pergunta = prompt("Deseja voltar ao menu? S/N");
        
        if( pergunta == "S" ) menu();
        else {
            return 0;
        }
    }

    if (esc == "B") {

        let fil = Number(prompt("Qual o filme que você deseja reavaliar: \n Filme 1 \n Filme 2 \n Filme 3 \n Filme 4 \n Filme 5 \n Filme 6") - 1)

        let novo = Number(prompt("Qual a nova nota?"))
        alert("Avaliado com sucesso!")
        get[fil].nota = novo

        let pergunta = prompt("Deseja voltar ao menu? S/N");
        
        if( pergunta == "S" ) menu();
        else {
            return 0;
        }

    }

    if(esc == "C" ){

        let fil = Number(prompt("Qual o filme que você deseja reatribuir: \n Filme 1 \n Filme 2 \n Filme 3 \n Filme 4 \n Filme 5 \n Filme 6") - 1)

        gal[fil].nome = prompt("Digite o novo nome: ")
        gal[fil].nota = prompt("Digite a nova nota: ")

        let pergunta = prompt("Deseja voltar ao menu? S/N");
        
        if( pergunta == "S" ) menu();
        else {
            return 0;
        }


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

menu()

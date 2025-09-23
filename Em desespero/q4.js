
let m1 = {
    nota: "",
    nome: "",
    freq: "",
}

let m2 = {
    nota: "",
    nome: "",
    freq: "",
}

let m3 = {
    nota: "",
    nome: "",
    freq: "",
}

let m4 = {
    nota: "",
    nome: "",
    freq: "",
}
let m5 = {
    nota: "",
    nome: "",
    freq: "",
}

let m6 = {
    nota: "",
    nome: "",
    freq: "",
}

let m7 = {
    nota: "",
    nome: "",
    freq: "",
}

let m8 = {
    nota: "",
    nome: "",
    freq: "",
}

let mat = [m1, m2, m3, m4, m5, m6, m7, m8]

for (i = 0; i < 8; i++) {

    let valores = prompt("Digite o nome da matéria:")
    mat[i].nome = valores

    let valores1 = prompt("Digite o nota dessa matéria:")
    mat[i].nota = valores1

    let valores2 = prompt("Digite a frequência dessa matéria:")
    mat[i].freq = valores2

}

let mediafreq = 0
let mediaf

for(i = 0; i < 8; i ++){

    mediafreq += mat[i].freq
}

mediaf = mediafreq/8

let medianotas = 0
let median

for(i = 0; i < 8; i ++){

   medianotas+= mat[i].nota

}

median = medianotas/8
median * 0.6
let acima60 = 0;

for(i = 0; i < 8; i ++){

   if(mat[i].nota > median){

    acima60++

   }
   
}


console.log("Média das Frequências em %: ", mediaf)
console.log("Quantidade de matérias com notas acima de 60%: ", acima60 )






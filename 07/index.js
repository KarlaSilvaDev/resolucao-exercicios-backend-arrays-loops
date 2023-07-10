const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let nomesIniciadoPorA = [];

//Utilizando FOR OF

for (let nome of nomes){
    if ((nome[0] === "a") || (nome[0] ==="A")){
        nomesIniciadoPorA.push(nome);
    }
}


//Utilizando FOR tradicional
/*
for (let i = 0; i < nomes.length; i++){
    if ((nomes[i][0] === "a")||(nomes[i][0] === "A")){
        nomesIniciadoPorA.push(nomes[i]);
    }
}
*/

//Utilizando WHILE
/*
let i = 0;
while (i < nomes.length){
    if ((nomes[i][0] === "a")||(nomes[i][0] === "A")){
        nomesIniciadoPorA.push(nomes[i]);
    }
    i++;
}
*/

//RESPOSTA FINAL
console.log(nomesIniciadoPorA);
const letras = ["A", "a", "B", "C", "E", "e"];
let soma = 0;
let encontrada = false;


//Utilizando FOR OF

for (let letra of letras){
    if ((letra === "e") || (letra === "E")){
        soma++;
        encontrada = true;
    }
}


//Utilizando FOR tradicional

/*
for (let i = 0; i < letras.length; i++){
    if ((letras[i] === "e") || (letras[i] == "E")){
        soma++;
        encontrada = true;
    }
}
*/

//Utilizando WHILE
/*
let i = 0;
while (i < letras.length){
    if ((letras[i] === "e") || (letras[i] == "E")){
        soma++;
        encontrada = true;
    }
    i++;
}
*/

//RESPOSTA FINAL
if (encontrada == true){
    if (soma > 1){
        console.log(`Foram encontradas ${soma} letras "E" ou "e".`);
    }else{
        console.log(`Foi encontrada ${soma} letra "E" ou "e". `);
    }
}else{
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
}
const numeros = [2, 3, 4, 6];
let soma = 0;

//Utilizando FOR OF
for (let numero of numeros){
    soma += numero;
}

//Utilizando FOR tradicional
/*
for (let indice = 0; indice < numeros.length; indice++){
    soma += numeros[indice];
}
*/

//Utilizando WHILE
/*
let indice = 0;
while(indice < numeros.length){
    soma += numeros[indice];
    indice++;
}
*/

//RESPOSTA FINAL
console.log(soma);
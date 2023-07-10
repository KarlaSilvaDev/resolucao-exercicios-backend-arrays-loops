const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let somaPares = 0;
//Usando FOR OF

for (let num of numeros){
    if (num % 2 == 0){
        somaPares += num;
    }
}

//Utilizando FOR tradicional
/*
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 == 0){
        somaPares += numeros[i];
    }
}
*/

//Utilizando WHILE
/*
let i = 0;
while (i < numeros.length){
    if (numeros[i] % 2 == 0){
        somaPares += numeros[i];
    }
    i++;
}
*/

//RESPOSTA FINAL
console.log(somaPares);
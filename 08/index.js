const numeros = [-3, -24, -1, -8, -11, -7, -15];


//Utilizando FOR OF

let cont = 0;
for (let numero of numeros){
    if (cont == 0){
        maior = numero;
    }else{
        if (maior < numero){
            maior = numero;
        }
    }
    cont++;
}


//Utilizando FOR tradicional
/*
for (let i = 0; i < numeros.length; i++){
    if (i == 0){
        maior = numeros[i];
    }else{
        if (maior < numeros[i]){
            maior = numeros[i];
        }
    }
}
*/

//Utilizando WHILE
/*
let i = 0;
while (i < numeros.length){
    if (i == 0){
        maior = numeros[i];
    }else{
        if (maior < numeros[i]){
            maior =  numeros[i];
        }
    }
    i++;
}
*/


//RESPOSTA FINAL
console.log(maior)
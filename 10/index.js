const numeros = [8, 11, 4, -1, 12];
let maior = 0;
let menor = 0;

//Utilizando FOR OF
let cont = 0;
for (let num of numeros){
    if (cont == 0){
        maior = num;
        menor = num;
    }else{
        if (maior < num){
            maior = num;
        }
        if (menor > num){
            menor = num;
        }
    }
    cont++;
}

//Utilizando FOR tradicional
/*
for (let i = 0; i < numeros.length; i++){
    if (i == 0){
        maior = numeros[i];
        menor = numeros[i];
    }else{
        if (maior < numeros[i]){
            maior = numeros[i];
        }
        if (menor > numeros[i]){
            menor = numeros[i];
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
        menor = numeros[i];
    }else{
        if (maior < numeros[i]){
            maior = numeros[i];
        }
        if (menor > numeros[i]){
            menor = numeros[i];
        }
    }
    i++;
}
*/


//Resultado Final
console.log(maior - menor);
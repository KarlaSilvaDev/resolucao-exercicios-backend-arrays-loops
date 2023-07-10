const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

//Utilizando FOR OF

for (let num of original){
    if (num % 2 == 0){
        pares.push(num);
    }else{
        impares.push(num);
    }
}


//Utilizando FOR tradicional
/*
for (let i = 0; i < original.length; i++){
    if (original[i] % 2 == 0){
        pares.push(original[i]);
    }else{
        impares.push(original[i]);
    }
}
*/

//Utilizando WHILE
/*
let i = 0;
while (i < original.length){
    if (original[i] % 2 == 0){
        pares.push(original[i]);
    }else{
        impares.push(original[i]);
    }
    i++;  
}
*/

//RESPOSTA FINAL
console.log(pares);
console.log(impares);
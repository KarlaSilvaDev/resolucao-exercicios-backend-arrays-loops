const original = [1, 4, 12, 21, 2, 53, 88, 31, 112];
let pares = [];

//Utilizando FOR OF

for (let num of original){
    if (num % 2 == 0){
        pares.push(num);
    }
}

//Utilizando FOR tradicional

/*for (let i = 0; i<=(original.length -1); i++){
    if (original[i] % 2 == 0){
        pares.push(original[i]);
    }
}*/

//Utilizando WHILE

/*let i = 0;
while (i <= (original.length - 1)){
    if (original[i] % 2 == 0){
        pares.push(original[i]);
    }
    i++;
}*/

console.log(pares);


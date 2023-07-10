const original = [5, 7, 10, 13, 17, 20, 26, 34, 100, 118, 245];

let novo = [] //contem apenas os números do array original que estejam entre 10 e 20, incluindo esses números, ou que sejam maiores que 100

//Utilizando FOR OF

for (let num of original){
    if (((num>=10)&&(num<=20)) || (num > 100)){
        novo.push(num);
    }
}


//Utilizando FOR| tradicional
/*
for (let i = 0; i < original.length; i++){
    if (((original[i]>=10)&&(original[i]<=20)) || (original[i] > 100)){
        novo.push(original[i]);
    }
}
*/

//Utilizando WHILE
/*
let i = 0;
while (i < original.length){
    if (((original[i]>=10)&&(original[i]<=20)) || (original[i] > 100)){
        novo.push(original[i]);
    }
    i++;
}
*/

console.log(novo)

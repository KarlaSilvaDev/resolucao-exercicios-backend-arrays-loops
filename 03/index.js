const numeros = [54, 22, 14, 87, 10, 284];
let encontrado = false;
let indice = 0;

for (let numero of numeros){
    if (numero == 10){
        encontrado = true;
        console.log(indice);
    }
    indice++;
}

if (encontrado == false){
    console.log(-1);
}
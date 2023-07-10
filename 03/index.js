const numeros = [54, 22, 14, 87, 10, 284];

//Utilizando FOR OF
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

//Utilizando o FOR tradicional

/*let encontrado = false;

for (let indice = 0; indice < numeros.length; indice++){
    if (numeros[indice] == 10){
        encontrado = true;
        console.log(indice);
    }
}

if (encontrado == false){
    console.log(-1);
}*/

//Utilizando WHILE

/*let encontrado = false;
let indice = 0;
while (indice < numeros.length){
    if (numeros[indice] == 10){
        encontrado = true;
        console.log(indice);
    }
    indice++;
}

if (encontrado == false){
    console.log(-1);
}*/
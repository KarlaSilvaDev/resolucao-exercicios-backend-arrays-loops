const disjuntores = [false, false, true, false, false, true, false, false];

//Utilizando FOR tradicional
for (i = 0; i < disjuntores.length; i++){
    if (disjuntores[i]){
        console.log(i);
    }
}

//Utilizando FOR OF
/*
let i = 0;
for (disjuntor of disjuntores){
    if (disjuntor){
        console.log(i);
    }
    i++;
}
*/

//Utilizando WHILE
/*
let i = 0;
while (i < disjuntores.length){
    if (disjuntores[i]){
        console.log(i);
    }
    i++;
}
*/
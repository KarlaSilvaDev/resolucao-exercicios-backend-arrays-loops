const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

//Utilizando FOR tradicional
if (arrayA.length == arrayB.length){
    for(let i = 0; i < arrayA.length; i++){
        if (arrayA[i] < arrayB[i]){
            console.log(arrayA[i]);
        }else{
            console.log(arrayB[i]);
        }
    }
}else{
    console.log("Não foi possível realizar a comparação, pois os Arrays têm tamanhos diferentes!")
}


//Utilizando WHILE
/*
if (arrayA.length == arrayB.length){
    let i = 0;
    while (i < arrayA.length){
        if (arrayA[i] < arrayB[i]){
            console.log(arrayA[i]);
        }else{
            console.log(arrayB[i]);
        }
        i++;
    }
}else{
    console.log("Não foi possível realizar a comparação, pois os Arrays têm tamanhos diferentes!")
}
*/

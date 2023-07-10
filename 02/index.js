const letras = ["A", "a", "B", "C", "E", "e"];
let soma = 0;
let encontrada = false;

for (let letra of letras){
    if ((letra === "e") || (letra === "E")){
        soma++;
        encontrada = true;
    }
}

if (encontrada == true){
    if (soma > 1){
        console.log(`Foram encontradas ${soma} letras "E" ou "e".`);
    }else{
        console.log(`Foi encontrada ${soma} letra "E" ou "e". `);
    }
}else{
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
}
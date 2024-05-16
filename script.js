// + Adição
// - Subtração
// * Multiplicação
// / Divisão
// % Módulo
// ++ Incremento
// -- Decremento

let nota1 = 1.0;
let nota2 = 6.0;

const media = (nota1 + nota2) /2;

if (media >= 7){
    console.log("Você passou com média " + media);
}
else {
    console.log("Sua nota " + media + " Não foi o suficiente para passar ");
}

let conceito = ""

if(media >=8){

    conceito = "Ótimo";
}
else if( media > 6.5){
    conceito = "Bom"


}else {

    conceito ="regular"
}

console.log(media)
console.log(conceito)


switch(conceito){

    case "Ótimo":
        console.log("Parábens, você é 10.")
        break;

    case "Bom":
        console.log("Você está quase perfeito.")
        break;

    case "regular":
        console.log("Estude mais um pouco.")
        break; 
    default:
        console.log( "Houve algum erro.")
        break;


}
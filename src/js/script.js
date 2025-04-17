// EXERCÍCIO 1

// Criando uma variável com valor
let variavel1 = 10;

// Criando uma variável indefinida
let variavel2;

// Criando uma variável vazia
let variavel3 = null;

//Imprimindo as variáveis no console
console.log(variavel1);
console.log(variavel2);
console.log(variavel3);

// EXERCÍCIO 2

// Declarando as variáveis que serão utilizadas
let numero1 = 12;
let numero2 = 8;
let numero3 = 8;

//Utilizando o operador de diferença, mostrando se a condição é verdadeira ou falsa
console.log(numero1 !== numero2);

//Utilizando o operador de igualdade, mostrando se a condição é verdadeira ou falsa
console.log(numero3 == numero2);

//Utilizando o operador de maior ou igual, mostrando se a condição é verdadeira ou falsa
console.log(numero1 >= numero2);

// EXERCICIO 3

//Declarando as variáveis
let peso = 62;
let altura = 1.73;
let imc = peso / (altura * altura);

//Criando as condições usando switch case
switch(true) {
    case imc < 18.5:
        console.log("Abaixo do peso");
        break;
    case imc >= 18.5 && imc <= 24.9:
        console.log("Peso ideal");
        break;
    case imc > 24.9:
        console.log("Acima do Peso");
        break;
}
// EXERCICIO 4
//Criando a estrutura de repetição for até 50
for(let i = 0; i<= 50;i++){
    console.log("O valor é: ", i)
}
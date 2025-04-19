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
// EXERCICIO 5
//Declarando as variáveis
let usuario = "Admin";
let senha = "1234"
let usuarioinserido = "";
let senhainserida = "";
//Criando a estrutura prompt
// usuarioinserido = prompt("Digite o nome de usuário:");
// senhainserida = prompt("Digite a senha: ");

// //Fazendo a estrutura if else
// if(usuarioinserido == usuario && senhainserida == senha){
//     alert("Login realizado com sucesso!")
// } else{
//     alert("Houve falha de autenticação")
// };

//EXERCICIO 6
//Declarando as variáveis
let nota1 = 8;
let nota2 = 7;
let nota3 = 9;
let nota4 = 6; 
let nota5 = 4;
let nota6 = 10;
let nota7 = 5;
let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;

//Criando a estrutura if else
if(media >= 6){
    console.log("Aprovado com média:", media)
} else{
    console.log("Reprovado com média:", media)
};

// EXERCICIO 7 

const conteudo = document.querySelector("#conteudo");
let nome = "Carlos";
let idade = 25;
let curso = "Engenharia de Software";
conteudo.innerHTML = "O nome é: " + nome;
conteudo2.innerHTML = "A idade é: " + idade;
conteudo3.innerHTML = "O curso é: " + curso;

//EXERCICIO 8
//Declarando a variável texto
let texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.";
//Buscando a primeira posição de em
console.log(texto.indexOf("em"));
//Buscando a última posição de ão
console.log(texto.lastIndexOf("ão"));
//Buscando as palavras ciência e métodos
console.log(texto.indexOf("ciência"));
console.log(texto.indexOf("métodos"));
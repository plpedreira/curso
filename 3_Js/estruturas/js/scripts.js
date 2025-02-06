// 1 - Variáveis
let nome = "Pedro";

console.log(nome);

nome = "Pedro Lucas";

const idade = 20;

console.log(idade);

console.log(typeof nome);

console.log(typeof idade);

// 2 - mais sobre vairáveis
let a = 10,
    b = 20,
    c = 30;
console.log (a, b, c);

const nomecompleto = "Pedro Lucas";

const nomeCompleto = "João Victor";

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "ok";
let $teste = "ok";

// 3 - prompt
const age = prompt("Digite a sua idade:");

console.log(`você tem ${age} anos.`);

// 4 - alert
alert("testando");

z = 10
alert(`numero é igual a ${z}`)

// 5 - Math
console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5,40));

console.log(Math.ceil(5, 14));20

// 6 -  cosnole
console.log("teste!");

console.error("erro!");

console.warn("aviso!");

// 7 - if
const m = 10;

if(m > 5){

    console.log("M é maior que 5!")

}

const user = "João"

if(user === "João"){

    console.log("o nome do usuario é joão");

}

if(user === "Isabella"){

    console.log("o nome do usuario é Isabella");

}

console.log(user === "João", user === "Isabella");

// 8 - else
const loggedIn = false
if(loggedIn) {
    console.log("esta autenticado!");
} else {
    console.log("Não esta autenticado");
}

const q = 10
const w = 15
if(q > 5 && w >20) {
console.log("Números mais altos!")
} else{
    console.log("os Números não são mais altos!")
}
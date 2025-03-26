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
console.log(a, b, c);

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

console.log(Math.floor(5, 40));

console.log(Math.ceil(5, 14)); 20

// 6 -  cosnole
console.log("teste!");

console.error("erro!");

console.warn("aviso!");

// 7 - if
const m = 10;

if (m > 5) {

    console.log("M é maior que 5!")

}

const user = "João"

if (user === "João") {

    console.log("o nome do usuario é joão");

}

if (user === "Isabella") {

    console.log("o nome do usuario é Isabella");

}

console.log(user === "João", user === "Isabella");

// 8 - else
const loggedIn = false
if (loggedIn) {
    console.log("esta autenticado!");
} else {
    console.log("Não esta autenticado");
}

const q = 10
const w = 15
if (q > 5 && w > 20) {
    console.log("Números mais altos!");
} else {
    console.log("os Números não são mais altos!");
}

// 9 -elif
if (1 > 2) {
    console.log("teste");
} else if (2 > 3) {
    console.log("teste 2");
} else if (5 > 1) {
    console.log("agora sim");
}

const userName = "Pedro"
const userAge = 20

if (userName === "José") {
    console.log("bem vindo Joés!");
} else if (userName === "Pedro" && userAge === 20) {
    console.log("Bem vindo Pedro!");
} else {
    console.log("Alguma condição não foi atingida !");
}

// 10 - while
let p = 0

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// loop infinito
// let x =10;

// while(x > 5) {
//     console.log (`imprimindo ${x}`);
// }

// 11 - do while
let o = 10

do {
    console.log(`valor de ${o}`);
    o--;
} while (o > 1);

// 12 - for
for (let t = 0; t < 10; t++) {
    console.log("repetindo algo...");
}

let r = 10;
for (r; r > 0; r = r - 1) {
    console.log(`o r está diminuindo ${r}`);
}

// 14 - break
for( let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);

    if(g === 12) {
        console.log("o g é 20!");
        break;
    }
}

for(let c = 15; c > 5; c--){
    console.log(`o c é: ${c}`);

    if(c === 10) {
        console.log("o c é 10!");
        break
    }
}

// 15 - copntinue

for(let s = 1; s < 10; s = s + 1) {
    // operador de resto = %
    if( s % 2 === 0) {
        console.log("Numero par!")
        continue;
    }
    
    console.log(s);
}

// 16 - switch
const job ="Advogado"

switch(job) {
    case "Programador":
        console.log("Voce e um programador")
        break
    case "Advogado":
        console.log("Voce e um advogado")
        break
    case "Engenheiro":
        console.log("Voce e um engenheiro")
        break
    default:
    console.log("Profissao nao encontrada")
}
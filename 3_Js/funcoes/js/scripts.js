// 1 - criando uma funçao
function minhaFuncao() {
    console.log("testando");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("func em variavel");
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Imprimindo alguma coisa");

funcaoComParametro("Outra funcao")

// 2 - rturn
const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));

// 3 - escopo da função
let y = 10

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função e: ${y}`);
}
testandoEscopo();

y = 15;

console.log(`Y fora da função e: ${y}`);

testandoEscopo();

// 4 - Nested scopes
let m = 10

function escoopAninhado() {
    let m = 20

    if (true) {
        let m = 30

        if (true) {
            let m = 40

            console.log(m)
        }

        console.log(m)
    }

    console.log(m)
}

escoopAninhado()

console.log(m)

// 5 - arrow function
const testeArrow = () => {
    console.log("Esta é um arrow function");
};

testeArrow();

const parOuImpar = (n) => {
    if(n % 2 === 0);
        console.log("par");
    return
  }
console.log("Impar");

parOuImpar(5);

parOuImpar(10);

// 6 - mais sobre arrow function

const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x

console.log(raizQuadrada(12));

console.log(raizQuadrada2(5));

const helloWorld = () => console.log("Hello world")

helloWorld();
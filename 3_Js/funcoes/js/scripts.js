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

// 7 - parametro opcional

const multiplication = function(m, n) {
    if( n === undefined){
        return m * 2
    } else{
       return m * n
    }
}

console.log(multiplication(5));

console.log(multiplication(2, 4));

const greeeting = (name) => {
    if(!name) {
        console.log("Ola!");
        return
    }

    console.log(`Ola ${name}!`)
}

greeeting()

greeeting("Pedro")

// 8 - valor defoult
const customGreeting = (name, greet ="Ola") => {
    return`${greet}, ${name}!`
}

console.log(customGreeting("Pedro"))

console.log(customGreeting("Jadson" , "Bom dia"))

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++){
        console.log(text)
    }
}

repeatText("Testando");

repeatText("Agora repete 5 vezes", 5);

// 9 - closure
function someFunction() {
    let txt = "Alguma coisa";

    function display() {
        console.log(txt);
    }
    display();
}

someFunction();

// 10 - more about closure
const multiplicationClosure = (n) => {
    return (n) => {
        return n * m
    }
}

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1)

console.log(c2)

console.log(c1(5))

console.log(c2(10))

// 11 - recursion

const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A funcao parou de executar!")
    } else {
        const x = n - m
        console.log(x)

        untilTen(x, m )
    }
}

untilTen(100 , 7);

function factorial(x) {
    if(x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

const num = 6

const result = factorial(num);

console.log(`o fatorial do numero ${num} e ${result}`)
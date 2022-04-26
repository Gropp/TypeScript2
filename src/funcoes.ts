// function person(name, age) {
// criando a funcao tipificando os argumentos e o retorno da funcao - explicitando
// como o return esta viculado a uma string, o string final é redundante
function personNew (name:string, age:number|string): string {
    console.log(name, age);
    const str = `Meu nome é ${name} e minha idade é ${age}`;
    console.log(str);
    return str;
}

personNew('Fernando','49');

// nesta funcao, como ambos os argumentos sao numeros, o retorno sera com certeza um numero
// entao seria redundante explicitar
function sum (num1:number, num2:number) {
    console.log(num1+num2);
    return num1+num2;
}

sum(30, 70);


// o tipo any permite a variavel assumir qquer tipo de dados - number/string/bool
let myName: any;
myName = 39;

let user:{
    nome:string,
    color: string,
    isAdmin: any,
};

user = {
    nome: 'Fernando',
    color: 'Branca',
    isAdmin: 'true',
};

console.log(user);

let user2: {
    nome: string;
    idade: number;
    cor?: string;
    isAdmin?: boolean;
};

// tornando propriedades opcionais ?
user2 = {
    nome: 'Fernando',
    idade: 49,
};

// tornando parametros opcionais ?
// sempre coloque o parametro opcional como ultimo, pois a funcao chama os 
// argumentos na ordem declarada
function pessoa(nome:string, age:number, cor:string, isAdmin?:boolean) {
    console.log(nome, age, cor, isAdmin);
}

// se vc nao passar o parametro opcional, a funcao declara ele como undefined
pessoa('Fernando', 49, 'Branco');

// type alias - dar um apelido para um tipo composto
// cria um apelido para os tipos que voce precisa
// usar quando voce for usar dois ou mais tipos em uma mesma variavel
type NumberOrString = number|string;

function carro (marca:string, modelo:string, cor: string, anofab:number, anomod:number, chassi:NumberOrString) {
    console.log(marca, modelo, cor, anofab, anomod, chassi);
}

carro('VolksWagen', 'Spacefox', 'preta', 2013, 2014, 123459830493);
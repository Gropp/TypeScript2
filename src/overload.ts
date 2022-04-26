// criacao de moldes de funcao, para serem implementadas no codigo
// é como se fosse uma assinatura da funcao
function person(a:string, b:number): number;

function person(a:string, b:number): number {
    return b;
}

console.log(person('Fernando', 49));

// arrow functions
// o retorno da funcao vc usa =>
let secondPerson: (x:string, y:number) => number;
secondPerson = (x:string, y:number) => {
    return y;
} 

console.log(secondPerson('Fernando', 49));
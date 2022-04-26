export class Candidato {
    
    // esse metodo de declarar as variaveis e depois chamar no construtor da para simplificar
    //nome:string;
    //idade:number|string;

    // colocando o public no construtor é muito mais funcional
    // se nao puser public as variaveis nao sao acessiveis
    constructor(public nome:string, public idade:number|string){
        
        // elimina essas cargas colocando o public no construtor
        //this.nome = nome;
        //this.idade = idade;
    }

    info():string{
        return `meu nome é ${this.nome} e minha idade é de ${this.idade}`;
    }
}
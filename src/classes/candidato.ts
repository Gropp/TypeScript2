export class Candidato {
    
    // esse metodo de declarar as variaveis e depois chamar no construtor da para simplificar
    //nome:string;
    //idade:number|string;

    // colocando o public no construtor é muito mais funcional
    // se nao puser public as variaveis nao sao acessiveis
    // public/protected/private
    // public - acesso liberado a todos
    // protected - acesso na classe e classes extends
    // private - acesso SOMENTE NA CLASSE
    // sem indicacao o padrao é public
    // readonly é somente leitura - acessa, mas nao modifica
    // somente com um constructor dentro da classe é possivel alterar uma propriedade readonly
    //constructor(protected nome:string, readonly idade:number|string){
    constructor(public nome:string, public idade:number|string){
        
        // elimina essas cargas colocando o public no construtor
        //this.nome = nome;
        //this.idade = idade;
    }

    info():string{
        return `meu nome é ${this.nome} e minha idade é de ${this.idade}`;
    }
}
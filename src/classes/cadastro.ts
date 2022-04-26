export class Cadastro {
    // criando propriedades sem atribuicao
    // se vc criar propriedades nao incializadas, vc deve atribuir algo no metodo construtor da classe
    // se vc quiser criar sem inicializar as variaveis, vc tem que alterar o tsconfig.json
    // "strictPropertyInitialization": false - tem que habilitar e tem q ser falso
    nomeCompleto:string;
    localNascimento:string;
    anoNascimento:string|number;

    constructor(nomeCompleto:string, localNascimento:string, anoNascimento:string|number){
        this.nomeCompleto = nomeCompleto;
        this.localNascimento = localNascimento;
        this.anoNascimento = anoNascimento;
    }
    
}
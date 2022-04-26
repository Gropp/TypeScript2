export class Registro {
    //propriedades privadas que usam get e set colocar 
    private _docGeral:number = 3216549870;
    private _key:number|string = '#TEST345876rY';
    static _status:boolean = true;

    //setters
    set docGeral(docGeral:number){
        this._docGeral = docGeral;
    }    

    set key(key:number|string){
        this._key = key;
    }
    
    // tem que referenciar a classe
    set status(status:boolean){
        Registro._status = status;
    }

    // setDocGeral(docGeral:number){
    //     this.docGeral = docGeral;
    // }
    // setKey(key:number|string){
    //     this.key = key;
    // }

    //getters

    get docGeral(){
        return this._docGeral;
    }

    get key(){
        return this._key;
    }
    
    // get em uma propriedade estatica
    get status(){
        return Registro._status;
    }
    // desse modo o retorno vem a funcao
    // getDocGeral(docGeral:number):number{
    //     return this.docGeral;
    // }
    // getKey(key:number|string):number|string{
    //     return this.key;
    // }

    //metodo
    regdata():string{
        return `Document: ${this._docGeral}\n Chave: ${this._key}`;
    }

    // como static o metodo nao acha as propriedades da classe??????
    // metodos statics nao aceitam this
    static chave():string|number{
        return 'teste';
    }

    // somente propriedades e metodos STATIC acessam o  this
    static situacao():boolean {
        return this._status;
    }
}
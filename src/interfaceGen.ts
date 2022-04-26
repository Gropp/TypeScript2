// cria um alias para o tipo da propriedade
// esse alias pode ser qquer tipo
export interface Iusuario<alias> {
    login:string;
    email:string;
    passwd:alias;
}

//criando um alias para os tipos
type numarrstring = number | string | string[];

// quando chama a interface, vc indica o tipo das variaveis genericas/com alias
export const usuario:Iusuario<string> = {
    login: 'gropp',
    email:'fernando@hotmail.com',
    passwd: 'q1w2e3!@#',
};

// funcao com tipo generico
// podemos delimitar o quao generico sera o alias
// numero ou array de string ou string
// colocando como PADRAO (=) a string
export function userEmail<T extends  numarrstring = string>(emailGen:T) {
    return emailGen;
}

//ao chamar a funcao atribui o tipo ao argumento userEmail<> - opcional
export const USER_EMAIL = userEmail<string>('teste@dominio.com.br');
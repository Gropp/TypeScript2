//importa uma constante
import {name} from './constantes';
//importa classes
import {Candidato} from './classes/candidato';
import { Registro } from './classes/registro';
import { IUserInterface, UserInterface, UserI1 } from './classes/generica';
//importando uma interface
import { USER_EMAIL, usuario } from './interfaceGen';


// usando classes genericas
// chamada sem a classe extendida
//const u = new UserInterface<IUserInterface>();
// nao precisa declarar o tipo entre <>
// instanciando a subclasse extends
const u = new UserI1();
u.data = {
    userName: 'Rô',
    userAge: 70,
};

console.log(u.data);

// usando uma interface generica
console.log(usuario);
console.log(USER_EMAIL);

// usando a classe candidato
const candidato = new Candidato(name, 49);
//alterando a propriedade da classe
//acessando diretamente as propriedades da classe.
//para evitar esse acesso direto vc coloca a protect na classe Candidato
//assim o acesso direto as propriedades fica protegido
candidato.nome = 'Viviani Samaniego';
candidato.idade = 10;
// mostra a propiredade info
console.log(candidato.info());
// mostra o conteudo da classe
console.log(candidato);

//instanciado a classe registro
const reg = new Registro();
//para alterar uma propriedade com get, nao usa igual, passa o valor como parametro para a 
//funcao set
//reg.setDocGeral(9086753421);
// setters nativos
reg.docGeral = 89056734512;
// getters nativos
console.log(reg.docGeral);
console.log(reg.key);
//chamando o metodo
console.log(reg.regdata());
//chamada de um metodo static - chama direto a classe, nao precisa instanciar
console.log(Registro.chave());
//chamando um metodo e uma propriedade static
console.log(Registro.situacao());

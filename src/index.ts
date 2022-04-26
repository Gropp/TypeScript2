//importa uma constante
import {name} from './constantes';
//importa uma classe
import {Candidato} from './classes/candidato';

const candidato = new Candidato(name, 49);
// mostra a propiredade info
console.log(candidato.info());
// mostra o conteudo da classe
console.log(candidato);
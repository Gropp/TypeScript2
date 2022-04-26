//carrega o tag form e a
// os elementos nao os ids
// a constante form pode receber o HTMLELement ou null
// para tirar essa opcao de null, se coloca uma exclamacao no final
// objetos nulos dao problema com o metodo link.addEventListener.
// vc chamando as ancoras tambem consolida que o elemento selecionado é com certeza um elemento HTML
const form = document.querySelector('form')!;
const link = document.querySelector('a')!;

//uma forma de fazer essa classificacao com ids e classes das tags, da para declara da seguinte forma:
//deixando clara essa relacao do elemento com um html elemento, as funcionalidades do DOM nao terao
//nenhum tipo de erro
const alias = document.querySelector('my-link') as HTMLAnchorElement;

link.addEventListener('click', () => {
    console.log('click');
});
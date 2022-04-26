enum Teclas {
    Cima = 'ArrowUp',
    Baixo = 'ArrowDown',
    Esquerda = 'ArrowLeft',
    Direita = 'ArrowRight',
}

window.addEventListener('keydown', function(e){
    if (e.key === Teclas.Cima) {
        console.log('pressionou a tecla arrow up'); 
    }
});
function cozinhar(callback) {
    console.log('Colocando comida no fogo...');
    setTimeout(() => {
        console.log('Comida no fogo...')
        setTimeout(() => {
            callback();
        }, 3000);
    }, 200);
    
}

function comerComida(){
    console.log('Comendo comida');
}

cozinhar(comerComida);
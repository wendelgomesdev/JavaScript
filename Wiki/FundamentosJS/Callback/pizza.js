// Uma função callback é simplesmente uma função passada 
// como argumento para outra função, que será chamada 
// (ou "executada") mais tarde, dentro dessa outra função.

function pedirPizza(callback) {
    console.log("Fazendo a pizza...");
    setTimeout(() => {
        console.log("Pizza está pronta!");
        callback(); // Chama a função callback passada como argumento
    }, 2000); // Simula que a pizza demora 2 segundos para ficar pronta
}

function comerPizza() {
    console.log("Comendo a pizza. Hummm!");
}

// Passamos 'comerPizza' como uma callback para 'pedirPizza'
pedirPizza(comerPizza);

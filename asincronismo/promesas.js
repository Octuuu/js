// es el resultado de una operacion asincronica, el cual podria estar disponible ahora o en el futuro 

let promesa = new Promise(function(resolve, reject) {
    // Simulacion de una tarea asincrona
    setTimeout(function() {
        // Simulacion de un resultado exitoso
        resolve('Resultado de la operacion');
    }, 2000);
}) 

// Se utiliza then para manejar el resultado exitoso

promesa.then(function(data) {
    console.log(data);
})

// Se utiliza catch para manejar el resultado fallido

promesa.catch(function(error) {
    console.error(error);
});
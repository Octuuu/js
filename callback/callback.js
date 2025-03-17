// funcion que se pasa a otra funcion como argumento y que se ejecuta dentro de esta 

function saludar (nombre) {
    console.log("Hola " + nombre);
}
function ingresarUsuario (callback){
    var nombre = prompt("Ingrese su nombre:");
    callback(nombre);
}

ingresarUsuario(saludar);
// este ejemplo es una callback sincrona, ya que se ejecuta inmediatamente 

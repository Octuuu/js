// string: secuencia de caracteres que represenran un valor 
// ejemplo de string 
let a = "hola";

// number: valor numerico
let b = 10;

// Boolean: valores true o false
let c = true;
let d = false; 

// undefined: variable no inicializada o no definida

// null: valor ausente o vacio

// symbol: tipo de dato, cuyos casos son unicos e comutables 

// object: estructura de datos que puede almacenar varios valores y propiedades, incluyendo funciones
// ejemplo de objeto 
    let persona = {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 30,
        saludar: function() {
            console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
        }
    };
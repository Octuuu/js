// es un metodo llamado en el momento de la creacion de instancias 
// en js la funcion sirve como el constructor del objeto, por lo qeu no hay necesidada de definir explicitamente un metodo constructor

function Persona() {
    this.nombre = "John Doe";
    this.apellido = "Smith";
    this.edad = 30;
}

// Creacion de una instancia de la clase Persona

var miPersona = new Persona();
console.log(miPersona); 
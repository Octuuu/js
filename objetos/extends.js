// la palabra extends es usada en declaraciones o expresiones de clase para crear una clase hija 

class Animal {
    constructor (nombre) {
        this.nombre = nombre;
    }
    hablar() {
        console.log(`${this.nombre} dice: Soy un animal`);
    }
}

class Perro extends Animal  {
    hablar() {
        console.log(`${this.nombre} dice: Woof! Woof!`);
    }
}
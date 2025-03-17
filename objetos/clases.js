// declaracion de clases 
class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
}


// expresion de clases 
// Anonima 
var Poligono = class { 
    constructor (alto, ancho) {
        this.alto = alto;
        this.anchura = ancho;
    }
}

// Nombrada 
var Poligono = class Poligono {
    constructor (alto, ancho) {
        this.alto = alto;
        this.anchura = ancho;
    }
}
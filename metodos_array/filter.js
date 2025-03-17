// crea un nuevo array con todos los elementos que cumpla con la condicion de la funcion dada
const palabras = ['espejo', 'placa', 'invierno', 'tipo']; 

const resultado = palabras.filter(palabra => palabra.length >= 5)

console.log(resultado);
// crea un nuevo array con los resultados de la llamda a la funcion a la que fueron indicada aplicados a cada uno de los elementos 

const arreglo = [1,2,3,4];
const nuevoArreglo = arreglo.map(numero => numero * 2);

console.log(nuevoArreglo)
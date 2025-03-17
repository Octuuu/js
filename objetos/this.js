// se refiere al objeto actual en el que se esta escribiendo el codigo 
let persona = {
    nombre: 'Octavio',
    apellido: 'Lugo',
    edad: 35,
};

const saludo = () => {
    alert('buenos dias' + this.nombre)
}
console.log(saludo)

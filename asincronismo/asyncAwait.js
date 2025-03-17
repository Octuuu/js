// la funcion async impictamente devulve la promesa y puede, en su cuerpo, esperar a que otras promesas se resuelvan de ,amera qie simuula ser sincronica, utilizando la keyword await

function convertirMinus(valor) {
    return new Promise ((resolve, reject) => {
        resolve(valor.toLowerCase());   
    })

    async function mensaje (x) {
        try {
            const mensaje = await convertirMinus(x);
            console.log(mensaje)
        } catch (err) {
            console.error(err)
        }
    }
}

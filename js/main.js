
class Profesor {
    constructor(nombre, password, materias) {
        this.id = Math.random()
        this.nombre  = nombre
        this.password = password
        this.materias = materias
    }
}

const profesores = []
profesores.push(new Profesor("Andres", "profe1", materias=["matematica", "scnat"])) 
profesores.push(new Profesor("Julio", "profe2", materias=["", "scsoc"])) 
console.log(profesores)

let btnConfirmar = document.querySelector('#btn-confirmar')

btnConfirmar.addEventListener('click', (e) => {
    e.preventDefault()
    let usuario = document.getElementById('input-profesor').value
    let pass = document.getElementById('input-password').value
    for (var i = 0; i < profesores.length; i++) {
        usuario == profesores[i].nombre ? usuarioCorrecto = true : null
        pass == profesores[i].password ? passCorrecto = true : null
    }
    if (usuarioCorrecto == true && passCorrecto == true){
        swal({
            title: 'GENIAL',
            text: 'Te logueaste correctamente',
            icon: 'success',
            button: 'Ok'
        })
        window.location.href = "pages/notas.html"
    }
    else if (usuarioCorrecto == false) {
        swal({
            title: 'ERROR',
            text: 'Usuario incorrecto',
            icon: 'error',
            button: 'Reintentar'
        })
    }
    else if (passCorrecto == false) {
        swal({
            title: 'ERROR',
            text: 'Contraseña incorrecta',
            icon: 'error',
            button: 'Reintentar'
        })
    }
    else {
        swal({
            title: 'ERROR',
            text: 'Error al iniciar sesion',
            icon: 'error',
            button: 'Reintentar'
        })
    }
})
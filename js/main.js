
class Profesor {
    constructor(nombre, password, materias) {
        this.id = Math.random()
        this.nombre  = nombre
        this.password = password
        this.materias = materias
    }
}

let profesores = []

fetch('../profesores.json')
    .then((resp) => resp.json())
    .then((data) => {
        profesores = data
        console.log(profesores)
    })

let btnConfirmar = document.querySelector('#btn-confirmar')
let usuarioCorrecto = false
let passCorrecto = false

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
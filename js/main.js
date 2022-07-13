
let profesores = []
let btnConfirmar = document.querySelector('#btn-confirmar')

fetch('./profesores.json')
    .then((resp) => resp.json())
    .then((data) => {
        profesores = data
        console.log(profesores)
    })

btnConfirmar.addEventListener('click', (e) => {
    e.preventDefault()
    let usuarioCorrecto = false
    let passCorrecto = false
    let usuario = document.getElementById('input-profesor').value
    let pass = document.getElementById('input-password').value
    for (const Profesor of profesores) {
        if (usuario == Profesor.nombre) {
            usuarioCorrecto = true
            sessionStorage.setItem('usuarioActual', JSON.stringify(Profesor))
        }
        pass == Profesor.password ? passCorrecto = true : null
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

const usuario = JSON.parse(sessionStorage.getItem("usuarioActual"))
console.log(usuario)

elegirMateria(usuario.materias)

const alumnos = []
const almacenados = JSON.parse(localStorage.getItem("listaAlumnos"))
if (almacenados != null) {
    console.log(almacenados)
    for (const objeto of almacenados) {
        alumnos.push(new Alumno(objeto.nombre, objeto.notas, objeto.promedio, objeto.materia))
    }
}

let inputNombre = document.querySelector('#input-nombre')
let inputNota1 = document.querySelector('#input-nota1')
let inputNota2 = document.querySelector('#input-nota2')
let inputNota3 = document.querySelector('#input-nota3')
let btnEnviar = document.querySelector('#btn-enviar')
const btn1 = document.querySelector('#boton1')
const btn2 = document.querySelector('#boton2')
const btn3 = document.querySelector('#boton3')
const listaContenedor = document.querySelector('.listaContenedor')
const datosAnteriores = document.getElementById("eliminar")

inputNota1.addEventListener('change', revisarNota)
inputNota2.addEventListener('change', revisarNota)
inputNota3.addEventListener('change', revisarNota)

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(inputNombre.value)
    if (inputNombre.value === "") {
        swal({
            title: 'ERROR',
            text: 'No se a ingresado el nombre del alumno',
            icon: 'error',
            button: 'Reintentar'
        })
    }
    else {
        let notas = [Number(inputNota1.value), Number(inputNota2.value), Number(inputNota3.value)]
        let pro = promedio(notas)
        alumnos.push(new Alumno(inputNombre.value, notas, pro, materiaActiva))
        swal({
            title: 'GENIAL',
            text: 'Datos de alumno almacenado correctamente',
            icon: 'success',
            button: 'Siguiente'
        })
    }
})

btn1.onclick = () => { 
    if ( alumnos.length == 0) {
        swal({
            title: 'ERROR',
            text: 'No se a ingresado ningun alumno',
            icon: 'error',
            button: 'Reintentar'
        })
    }
    cargarAlumnos() 
}

btn2.onclick = () => {
    const aprobados = alumnos.filter((el) => el.promedio >= 7)
    console.log(aprobados)
    for (const Alumno of aprobados) {
        if (Alumno.materia === materiaActiva) {
            console.log(document.getElementById(Alumno.id))
            document.getElementById(Alumno.id).style.color = "green"
        }
    }
}

btn3.onclick = () => {
    elegirMateria(usuario.materias)
}
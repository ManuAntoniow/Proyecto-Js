
class Profesor {
    constructor(nombre, password, materias) {
        this.id = Math.random()
        this.nombre  = nombre
        this.password = password
        this.materias = materias
    }
}

class Alumno {
    constructor(nombre, notas, promedio) {
        this.id = Math.random()
        this.nombre  = nombre.toUpperCase()
        this.notas = notas
        this.promedio  = Math.round(promedio)
    }
}

function promedio(num){
    total = num[0] + num[1] + num[2] 
    console.log(total)
    return(total / 3)
}

function revisarNota(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null
    input.value >= 11 ? (input.value = 10) : null
}

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) }

const profesores = []
profesores.push(new Profesor("Andres", "profe1", materias=["matematica", "scnat"])) 
profesores.push(new Profesor("Julio", "profe2", materias=["", "scsoc"])) 
console.log(profesores)
const alumnos = []
const almacenados = JSON.parse(localStorage.getItem("listaAlumnos"))
if (almacenados != null) {
    console.log(almacenados)
    for (const objeto of almacenados) {
        alumnos.push(new Alumno(objeto.nombre, objeto.notas, objeto.promedio))
    }
}

let btnConfirmar = document.querySelector('#btn-confirmar')
let inputNombre = document.querySelector('#input-nombre')
let inputNota1 = document.querySelector('#input-nota1')
let inputNota2 = document.querySelector('#input-nota2')
let inputNota3 = document.querySelector('#input-nota3')
let btnEnviar = document.querySelector('#btn-enviar')
const btn1 = document.querySelector('#boton1')
const btn2 = document.querySelector('#boton2')
const listaContenedor = document.querySelector('.listaContenedor')

inputNota1.addEventListener('change', revisarNota)
inputNota2.addEventListener('change', revisarNota)
inputNota3.addEventListener('change', revisarNota)

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

btn1.onclick = () => {
    console.log(alumnos)
    const datosAnteriores = document.getElementById("eliminar")
    // console.log(datosAnteriores.firstElementChild)
    if (datosAnteriores.firstElementChild != null) {
        for (var i = 0; i < alumnos.length; i++) {
            console.log(i, alumnos.length)
            datosAnteriores.removeChild(datosAnteriores.firstElementChild)
        }
    }
    for (const Alumno of alumnos) {
        let contenedor = document.createElement("div")
        contenedor.innerHTML =`
        <div class="row datosAlumno border-bottom" id="${Alumno.id}">
            <div class="col">
                <h4>${Alumno.nombre}</h6>
            </div>
            <div class="col-5">
                <h4>${Alumno.notas}</h4>
            </div>
            <div class="col ">
                <div class="d-flex justify-content-between align-items-center">
                    <h4>${Alumno.promedio}</h4>
                    <button class="btn btn-danger buttonDelete" type="button">X</button>
                </div>
            </div>
        </div>`
        listaContenedor.append(contenedor)
    }
    guardarLocal("listaAlumnos", JSON.stringify(alumnos))
}

btn2.onclick = () => {
    const aprobados = alumnos.filter((el) => el.promedio >= 7)
    console.log(aprobados)
    for (const Alumno of aprobados) {
        console.log(document.getElementById(Alumno.id))
        document.getElementById(Alumno.id).style.color = "green"
    }
}
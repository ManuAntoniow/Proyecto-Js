
class Alumno {
    constructor(nombre, notas, promedio) {
        this.id = Math.random()
        this.nombre  = nombre.toUpperCase()
        this.notas = notas
        this.promedio  = Math.round(promedio)
    }
}

function promedio(num){
    let total = num[0] + num[1] + num[2] 
    console.log(total)
    return(total / 3)
}

function revisarNota(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null
    input.value >= 11 ? (input.value = 10) : null
}

const cargarAlumnos = () => {
    datosAnteriores.innerHTML = ''
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
                    <button onclick="eliminarAlumno(${Alumno.id})" class="btn btn-danger buttonDelete">X</button>
                </div>
            </div>
        </div>`
        listaContenedor.append(contenedor)
    }
    guardarLocal("listaAlumnos", JSON.stringify(alumnos))
}

const eliminarAlumno = (id) => {
    const alumno = alumnos.find((Alumno) => Alumno.id === id)
    const indice = alumnos.indexOf(alumno)
    alumnos.splice(indice, 1)
    Toastify({
        text: `Se eliminó el alumno ${alumno.nombre}`,
        position: 'left',
        gravity: 'bottom',
        duration: 5000,
        style: {
            background: "linear-gradient(to right, #f17b5d, #f02f2f)",
        }
    }).showToast()
    cargarAlumnos()
}

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) }

const alumnos = []
const almacenados = JSON.parse(localStorage.getItem("listaAlumnos"))
if (almacenados != null) {
    console.log(almacenados)
    for (const objeto of almacenados) {
        alumnos.push(new Alumno(objeto.nombre, objeto.notas, objeto.promedio))
    }
}

let inputNombre = document.querySelector('#input-nombre')
let inputNota1 = document.querySelector('#input-nota1')
let inputNota2 = document.querySelector('#input-nota2')
let inputNota3 = document.querySelector('#input-nota3')
let btnEnviar = document.querySelector('#btn-enviar')
const btn1 = document.querySelector('#boton1')
const btn2 = document.querySelector('#boton2')
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
        alumnos.push(new Alumno(inputNombre.value, notas, pro))
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
        console.log(document.getElementById(Alumno.id))
        document.getElementById(Alumno.id).style.color = "green"
    }
}
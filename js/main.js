
const titulo = document.querySelector('#titulo')
const randomColor = () => {
    return Math.round( Math.random() * 255 )
}
titulo.addEventListener('mouseover', () => {
    const red = randomColor()
    const green = randomColor()
    const blue = randomColor()
    titulo.style.color = `rgb(${red}, ${green}, ${blue})`
})

function promedio(num){
    total = num[0] + num[1] + num[2] 
    console.log(total)
    return(total / 3)
}

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) }

class Alumno {
    constructor(nombre, notas, promedio) {
        this.id = Math.random()
        this.nombre  = nombre.toUpperCase()
        this.notas = notas
        this.promedio  = parseFloat(promedio)
    }
}

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

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    let notas = [Number(inputNota1.value), Number(inputNota2.value), Number(inputNota3.value)]
    let pro = promedio(notas)
    alumnos.push(new Alumno(inputNombre.value, notas, pro))
    swal({
        title: 'GENIAL',
        text: 'Datos de alumno almacenado correctamente',
        icon: 'success',
        confirmButtonText: 'Siguiente'
    })
})

const btn1 = document.querySelector('#boton1')
const btn2 = document.querySelector('#boton2')
const listaContenedor = document.querySelector('.listaContenedor')

btn1.onclick = () => {
    console.log(alumnos)
    // const datosAnteriores = document.getElementsByClassName("listaContenedor")
    // console.log(datosAnteriores)
    // datosAnteriores[0].remove()
    for (const Alumno of alumnos) {
        let contenedor = document.createElement("div")
        contenedor.innerHTML =`
        <div class="row datosAlumno" id="${Alumno.id}">
            <div class="col">
                <h4>${Alumno.nombre}</h6>
            </div>
            <div class="col-5">
                <h4>${Alumno.notas}</h4>
            </div>
            <div class="col">
                <h4>${Alumno.promedio}</h4>
            </div>
        </div>`
        listaContenedor.append(contenedor)
    }
    guardarLocal("listaAlumnos", JSON.stringify(alumnos))
}

//<button class="btn btn-danger buttonDelete" type="button">X</button>

btn2.onclick = () => {
    const aprobados = alumnos.filter((el) => el.promedio >= 7)
    console.log(aprobados)
    for (const Alumno of aprobados) {
        console.log(document.getElementById(Alumno.id))
        document.getElementById(Alumno.id).style.color = "green"
    }
}

function revisarNota(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null
    input.value >= 11 ? (input.value = 10) : null
}

inputNota1.addEventListener('change', revisarNota)
inputNota2.addEventListener('change', revisarNota)
inputNota3.addEventListener('change', revisarNota)
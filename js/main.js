
const titulo = document.querySelector('#titulo')
const randomColor = () => {
    return Math.round( Math.random() * 255 )
}
titulo.addEventListener('mouseover', () => {
    const red = randomColor()
    const green = randomColor()
    const blue = randomColor()
    titulo.style.color = `rgb(${red}, ${green}, ${blue})`
    alert("¡Hola Coder!")
})

function promedio(num){
    total = num[0] + num[1] + num[2] 
    console.log(total)
    return(total / 3)
}

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) }

class Alumno {
    constructor(nombre, notas, promedio) {
        this.nombre  = nombre.toUpperCase()
        this.notas = notas
        this.promedio  = parseFloat(promedio)
    }
}

const alumnos = []
const almacenados = JSON.parse(localStorage.getItem("listaAlumnos"))
console.log(almacenados)
for (const objeto of almacenados) {
    alumnos.push(new Alumno(objeto.nombre, objeto.notas, objeto.promedio))
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
})

const btn1 = document.querySelector('#boton1')
const btn2 = document.querySelector('#boton2')

btn1.onclick = () => {
    console.log(alumnos)
    for (const Alumno of alumnos) {
        let contenedor = document.createElement("div")
        contenedor.innerHTML = `<h3> Nombre: ${Alumno.nombre}</h3>
                                <p>  Notas: ${Alumno.notas}</p>
                                <p> Promedio: ${Alumno.promedio}</p>`
        document.body.appendChild(contenedor)
        guardarLocal(Alumno.nombre, JSON.stringify(Alumno));
    }
    guardarLocal("listaAlumnos", JSON.stringify(alumnos))
}
btn2.onclick = () => {
    const aprobados = alumnos.filter((el) => el.promedio >= 7)
    console.log(aprobados)
    for (const Alumno of aprobados) {
        let contenedor = document.createElement("div")
        contenedor.innerHTML = `<h3> Nombre: ${Alumno.nombre}</h3>
                                <p>  Notas: ${Alumno.notas}</p>
                                <p> Promedio: ${Alumno.promedio}</p>`
        document.body.appendChild(contenedor)
    }
}

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

class Alumno {
    constructor(nombre, notas, promedio) {
        this.nombre  = nombre.toUpperCase()
        this.notas = notas
        this.promedio  = parseFloat(promedio)
    }
}

let inputNombre = document.querySelector('#input-nombre')
let inputNota1 = document.querySelector('#input-nota1')
let inputNota2 = document.querySelector('#input-nota2')
let inputNota3 = document.querySelector('#input-nota3')
let btnEnviar = document.querySelector('#btn-enviar')
const alumnos = []

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    let notas = [Number(inputNota1.value), Number(inputNota2.value), Number(inputNota3.value)]
    let pro = promedio(notas)
    alumnos.push(new Alumno(inputNombre.value, notas, pro))
})

const btn1 = document.querySelector('#boton1')
const btn2 = document.querySelector('#boton2')

const aprobados = alumnos.filter((el) => el.promedio >= 7)
console.log(alumnos)
console.log(aprobados)

btn1.onclick = () => {
    console.log("Alumnos")
    for (const Alumno of alumnos) {
        let contenedor = document.createElement("div")
        contenedor.innerHTML = `<h3> Nombre: ${Alumno.nombre}</h3>
                                <p>  Notas: ${Alumno.notas}</p>
                                <b> Promedio: ${Alumno.promedio}</b>`
        document.body.appendChild(contenedor)
    }
}
btn2.onclick = () => {
    console.log("Aprobados")
    for (const Alumno of aprobados) {
        let contenedor = document.createElement("div")
        contenedor.innerHTML = `<h3> Nombre: ${Alumno.nombre}</h3>
                                <p>  Notas: ${Alumno.notas}</p>
                                <b> Promedio: ${Alumno.promedio}</b>`
        document.body.appendChild(contenedor)
    }
}

// let entrada = prompt("Ingrese nombre del alumno o esc para terminar")
// while(entrada != "esc"){
//     let pro = 0
//     let notas = []
//     alert(entrada + " ingresado/a")
//     console.log(entrada + " ingresado/a")
//     let nota = Number(prompt("Ingresar una nota o -1 para terminar"))
//     while(nota != -1 ){
//         notas.push(nota)
//         if ( nota >= 1 && nota <= 10 ){
//             pro = promedio(nota)
//             alert("El promedio actual de " + entrada + " es " + pro)
//             nota = Number(prompt("Ingresar otra nota o -1 para terminar"))
//         }else{
//             nota = Number(prompt("Nota incompatible ingrese otra o -1 para terminar"))
//         }
//     }
//     alumnos.push(new Alumno(entrada, notas, pro))
//     entrada = prompt("Ingrese nombre del alumno o esc para terminar")
//     contador = 0
//     total = 0
// }
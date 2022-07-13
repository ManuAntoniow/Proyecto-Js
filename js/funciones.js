
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
    let total = num[0] + num[1] + num[2] 
    console.log(total)
    return(total / 3)
}

function revisarNota(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null
    input.value >= 11 ? (input.value = 10) : null
}

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) }

let titulo = document.getElementById("tituloMateria")
const elegirMateria = (materias) => {
    swal({
        title: 'Seleccione',
        buttons: {
            A: {
                text: materias[0],
                value: "materiaA"
            },
            B: {
                text: materias[1],
                value: "materiaB"
            } 
        }
    })
    .then((value) => {
        switch(value) {
            case "materiaA":
                swal("Genial", `seleccionaste ${materias[0]}`, "success")
                titulo.innerText = `Alumnos ${materias[0]}`
                break
            case "materiaB":
                swal("Genial", `seleccionaste ${materias[1]}`, "success")
                titulo.innerText = `Alumnos ${materias[1]}`
                break
        }
    })
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
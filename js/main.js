
alert("¡Hola Coder!")

let contador = 0
let total = 0
function promedio(num){
    total += num
    contador += 1
    console.log(total)
    console.log(contador)
    return(total / contador)
}

class Alumno {
    constructor(nombre, promedio) {
        this.nombre  = nombre.toUpperCase();
        this.promedio  = parseFloat(promedio);
    }
}

const alumnos = []
let entrada = prompt("Ingrese nombre del alumno o esc para terminar")
while(entrada != "esc"){
    let pro = 0
    alert(entrada + " ingresado/a")
    console.log(entrada + " ingresado/a")
    let nota = Number(prompt("Ingresar una nota o -1 para terminar"))
    while(nota != -1 ){
        if ( nota >= 1 && nota <= 10 ){
            pro = promedio(nota)
            alert("El promedio actual de " + entrada + " es " + pro)
            nota = Number(prompt("Ingresar otra nota o -1 para terminar"))
        }else{
            nota = Number(prompt("Nota incompatible ingrese otra o -1 para terminar"))
        }
    }
    alumnos.push(new Alumno(entrada, pro))
    entrada = prompt("Ingrese nombre del alumno o esc para terminar")
    contador = 0
    total = 0
}

console.log(alumnos)
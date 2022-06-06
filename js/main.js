
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

let nombre = prompt("Ingrese nombre del alumno")
let salida  = nombre + " ingresado/a"
alert(salida)
console.log(salida)

let nota = Number(prompt("Ingresar una nota o -1 para terminar"))
while(nota != -1 ){
    if ( nota >= 1 && nota <= 10 ){
        alert("El promedio actual de " + nombre + " es " + promedio(nota))
        nota = Number(prompt("Ingresar otra nota o -1 para terminar"))
    }else{
        nota = Number(prompt("Nota incompatible ingrese otra o -1 para terminar"))
    }
}
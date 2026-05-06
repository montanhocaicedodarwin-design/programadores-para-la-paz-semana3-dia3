let semana = 1
const semanasDeSeguimiento = 6
let propuestasatendidas = 0

console.log("Seguimiento comunitario semana a semanal")

while (semana <= semanasDeSeguimiento) {
    console.log("Semana de seguimiento número:", semana)
    propuestasatendidas = propuestasatendidas + 2
    console.log("Propuestas atendidas hasta ahora:", propuestasatendidas)
    semana = semana + 1
} 
console.log("Proceso de seguimiento comunitario finalizado.")
console.log("Total de propuestas atendidas:", propuestasatendidas)

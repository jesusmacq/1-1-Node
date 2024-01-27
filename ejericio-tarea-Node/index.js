//Importamos picocolors usando la sintaxis de common js (CJS)

const pc = require('picocolors')

console.log(
    pc.magenta(`Saludos a todos mi nombre es ${pc.bold(`Jesús Quezada`)} Compañero de clase 30-web-a`)
)
console.log(
    pc.bgYellow(
        pc.black(`mis hobbies son ${pc.bold(`hacer ejercico, leer, escuchar música`)} jugar basketbol`)
    )
)
console.log(
    pc.blue(`Las películas que me gustan son  ${pc.bold(`Peliculas de Aventura, Intriga y algo de Terror`)} Saludos a todos`)
)
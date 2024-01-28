//Importamos el objeto pc de picocolor usando la sintaxis de EMC
import pc from "picocolors"

//Paso 2 Importar mi elemento en el archivo donde lo necesito
import nombre from "./nombre.js"
import {PI, suma, resta} from "./operaciones.js"

console.log('Hola Mundo!');
console.log('Saludos a Todos');

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
console.log(pc.red('Saludos a Todos'))

console.log("Hola " + nombre);
console.log(PI);
console.log(suma(PI, 5));
console.log(resta(10, 5));


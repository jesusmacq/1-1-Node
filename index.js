//Importamos picocolors usando la sintaxis de common js (CJS)
const pc = require('picocolors')
console.log("Hola mundo!")


console.log(
  pc.green(`How are ${pc.italic(`you`)} doing?`)
)

//cambiar a azul
console.log(
  pc.blue(`How are ${pc.italic(`you`)} doing?`)
)

console.log(
    pc.bgYellow(pc.blue(`How are ${pc.bold(`you`)} doing?`))
)


// ciclo infinito lo detengo con Ctl + c
//while(true){
    //console.log("Estoy Loco")
//}

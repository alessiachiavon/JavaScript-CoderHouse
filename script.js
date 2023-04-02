class Producto {
    constructor (tipo, material, color, precio) {
    this.tipo = tipo;
    this.material = material;
    this.color = color;
    this.precio = precio;
}
}

const productos = []; 
productos.push (new Producto ("cartera", "cuerina", "negro", 18000));
productos.push (new Producto ("cartera", "cuerina", "marron", 18000));
productos.push (new Producto ("cartera", "cuerina", "verde", 18000));
productos.push (new Producto ("cartera", "charol", "negro", 21000));
productos.push (new Producto ("bandolera", "cuerina", "negro", 15000));
productos.push (new Producto ("bandolera", "cuerina", "marron", 15000));
productos.push (new Producto ("bandolera", "cuerina", "verde", 15000));
productos.push (new Producto ("riñonera", "cuerina", "negro", 9000));
productos.push (new Producto ("riñonera", "cuerina", "verde", 9000));

let resultado
do {
let busqueda = prompt("Busque el producto que desea comprar. Puede hacerlo por tipo, material o color")

const resultado1 = productos.filter((el) => el.tipo === busqueda.toLowerCase())
const resultado2 = productos.filter((el) => el.material === busqueda.toLowerCase())
const resultado3 = productos.filter((el) => el.color === busqueda.toLowerCase())

resultado = resultado1.concat(resultado2, resultado3)

} while ( resultado.length == 0)

let mje = ""
let index = 1
resultado.forEach ((elemento) => {
mje = mje + index++ + "- " + elemento.tipo + " de " + elemento.material + ", color " + elemento.color + ". Precio $" + elemento.precio + "\n"
})

compra = prompt(mje + "\n Elija el producto que desea comprar:" )

const eleccion = resultado[compra-1]

const recargo = (precio, interes) => { return precio * interes}
const precioCuota = (precio, interes, cantCuotas) => { return precio * interes / cantCuotas}

do{
do{
    medioDePago = prompt("Como desea abonar? \n 1-Efectivo \n 2-Débito/Transferencia \n 3-Tarjeta de crédito")
} while((medioDePago != "1") && (medioDePago != "2") && (medioDePago != "3"))
if(medioDePago == "1"){
    efectivo = eleccion.precio*0.9;
    final = prompt(`El precio total de tu producto es: \$${efectivo} \n Desea: \n 1- Finalizar compra \n 2- Volver atrás`)
}
else  if(medioDePago == "2"){
    final = prompt(`El precio total de tu producto es: \$${eleccion.precio} \n Desea: \n 1- Finalizar compra \n 2- Volver atrás`)
}
else if(medioDePago == "3"){
    do{
        cuotas = prompt("En cuantas cuotas desea abonar? \n 1- 3 \n 2- 6 \n 3- 12 \n 4 -24")}
    while((cuotas != "1") && (cuotas != "2") && (cuotas != "3") && (cuotas != "4"))
    if(cuotas == "1"){
        do {
            final = prompt(`El precio total de tu producto es: \$${recargo(eleccion.precio, 1.12)} en 3 cuotas de: \$${precioCuota(eleccion.precio, 1.12, 3).toFixed(2)}\n Desea: \n 1- Finalizar compra \n 2- Volver atrás`)
        } while((final != "1") && (final != "2"))  
    }
    else if(cuotas == "2"){
        do {
            final = prompt(`El precio total de tu producto es: \$${recargo(eleccion.precio, 1.19)} en 6 cuotas de: \$${precioCuota(eleccion.precio, 1.19, 6).toFixed(2)}\n Desea: \n 1- Finalizar compra \n 2- Volver atrás`)
        } while((final != "1") && (final != "2"))  
    }
    else if(cuotas == "3"){
        do {
            final = prompt(`El precio total de tu producto es: \$${recargo(eleccion.precio, 1.3)} en 12 cuotas de: \$${precioCuota(eleccion.precio, 1.3, 12).toFixed(2)}\n Desea: \n 1- Finalizar compra \n 2- Volver atrás`)
        } while((final != "1") && (final != "2"))  
    }
    else if(cuotas == "4"){
        do {
            final = prompt(`El precio total de tu producto es: \$${recargo(eleccion.precio, 1.6)} en 24 cuotas de: \$ ${precioCuota(eleccion.precio, 1.6, 24).toFixed(2)} \n Desea: \n 1- Finalizar compra \n 2- Volver atrás`)
        } while((final != "1") && (final != "2"))  
    }
}

} while(final != "1")

alert("Gracias por su compra!")

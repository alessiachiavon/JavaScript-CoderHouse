let producto
let precio

const recargo = (precio, interes) => { return precio * interes}
const precioCuota = (precio, interes, cantCuotas) => { return precio * interes / cantCuotas}


    do{
        producto = prompt("Elige tu producto \n 1-Cartera $16.000 \n 2-Mochila $12.000 \n 3-Riñonera $9.000")
    } while((producto != "1") && (producto != "2") && (producto != "3"))
    if(producto == "1"){precio = 16000}
    else if(producto == "2"){precio = 12000}
    else if(producto == "3"){precio =9000}
do{
    do{
        medioDePago = prompt("Como desea abonar? \n 1-Efectivo \n 2-Débito/Transferencia \n 3-Tarjeta de crédito")
    } while((medioDePago != "1") && (medioDePago != "2") && (medioDePago != "3"))
    if(medioDePago == "1"){
        efectivo = precio*0.9;
        final = prompt(`El precio total de tu producto es: \$${efectivo} \n Desea: \n 1- Finalizar compra \n 2- Volver atrás`)
    }
    else  if(medioDePago == "2"){
        final = prompt(`El precio total de tu producto es: \$${precio} \n Desea: \n 1- Finalizar compra \n 2- Volver atrás`)
    }
    else if(medioDePago == "3"){
        do{
            cuotas = prompt("En cuantas cuotas desea abonar? \n 1- 3 \n 2- 6 \n 3- 12 \n 4 -24")}
        while((cuotas != "1") && (cuotas != "2") && (cuotas != "3") && (cuotas != "4"))
        if(cuotas == "1"){
            do {
                final = prompt(`El precio total de tu producto es: \$${recargo(precio, 1.12)} en 3 cuotas de: \$${precioCuota(precio, 1.12, 3).toFixed(2)}\n Desea: \n 1- Finalizar compra \n 2- Volver atrás`)
            } while((final != "1") && (final != "2"))  
        }
        else if(cuotas == "2"){
            do {
                final = prompt(`El precio total de tu producto es: \$${recargo(precio, 1.19)} en 6 cuotas de: \$${precioCuota(precio, 1.19, 6).toFixed(2)}\n Desea: \n 1- Finalizar compra \n 2- Volver atrás`)
            } while((final != "1") && (final != "2"))  
        }
        else if(cuotas == "3"){
            do {
                final = prompt(`El precio total de tu producto es: \$${recargo(precio, 1.3)} en 12 cuotas de: \$${precioCuota(precio, 1.3, 12).toFixed(2)}\n Desea: \n 1- Finalizar compra \n 2- Volver atrás`)
            } while((final != "1") && (final != "2"))  
        }
        else if(cuotas == "4"){
            do {
                final = prompt(`El precio total de tu producto es: \$${recargo(precio, 1.6)} en 24 cuotas de: \$ ${precioCuota(precio, 1.6, 24).toFixed(2)} \n Desea: \n 1- Finalizar compra \n 2- Volver atrás`)
            } while((final != "1") && (final != "2"))  
        }
    }
    
} while(final != "1")

alert("Gracias por su compra!")
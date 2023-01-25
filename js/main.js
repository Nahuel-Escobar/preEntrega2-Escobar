//Simulador de compra. Y de ver catalogo de videojuegos comprados
// La bienvenida
alert("¡Bienvenido a MaxGem!")

// Pedimos que es lo que quiere hacer 
let opciones 

function perdirOpcion(){   
    while(true){
        opciones = parseInt(prompt(`¿Que quieres hacer hoy? 
    1-Comprar  
    2-Ver catalogo  
    3-Salir`))
        if(!isNaN(opciones) && opciones != null && opciones != "" && opciones == 1 || opciones == 2){
            break;
        } else if (!isNaN(opciones) && opciones != null && opciones != "" && opciones == 3){
            alert("¡Hasta luego!")
            break;
        }else{
            alert('¡Ingrese un valor correcto!');
            continue
        }
    }
}

// Creamos algunos "Productos" con objetos
class Juegos {
    constructor(titulo, precio){
        this.titulo = titulo,
        this.precio = precio
    }
}

const juego1 = new Juegos("Harry Potter", 12000)
const juego2 = new Juegos("Crash bandicoot 4", 6000)
const juego3 = new Juegos("Warzone 2", 20000)
const juego4 = new Juegos("Mario bros", 5100)
const juego5 = new Juegos("Need for speed 2", 1100)
const juego6 = new Juegos("Fifa 23", 9000)
const juego7 = new Juegos("Call Of Duty", 4000)

// Creamos las funciones para el correcto funcionamiento
let comprarJuego

// Funcion para pedir el juego que quiere y mostrar catalago
function pedirJuego(){
    switch (opciones) {
        case 1:
            while(true){
                comprarJuego = parseInt(prompt(`¿Que juego quieres comprar?
                1-${juego1.titulo} que tiene el valor de $${juego1.precio} pesos
                2-${juego2.titulo} que tiene el valor de $${juego2.precio} pesos
                3-${juego3.titulo} que tiene el valor de $${juego3.precio} pesos
                4-${juego4.titulo} que tiene el valor de $${juego4.precio} pesos
                5-${juego5.titulo} que tiene el valor de $${juego5.precio} pesos
                6-${juego6.titulo} que tiene el valor de $${juego6.precio} pesos
                7-${juego7.titulo} que tiene el valor de $${juego7.precio} pesos
                8-Salir del menu `))
        
                if(!isNaN(comprarJuego) && comprarJuego != null && comprarJuego != " " && comprarJuego < 8){
                    break;
                } else if (!isNaN(comprarJuego) && comprarJuego != null && comprarJuego != "" && comprarJuego == 8){
                    alert("¡Hasta luego!")
                    break;
                }else{
                    alert('¡Ingrese un valor correcto!');
                    continue
                }
            }
            break;
        case 2:
            alert(`Nuestro catalogo de juego:
            ${juego1.titulo}  $${juego1.precio} 
            ${juego2.titulo}  $${juego2.precio}
            ${juego3.titulo}  $${juego3.precio}
            ${juego4.titulo}  $${juego4.precio}
            ${juego5.titulo}  $${juego5.precio}
            ${juego6.titulo}  $${juego6.precio}
            ${juego7.titulo}  $${juego7.precio}
            `)
            break;
        default:
            break;
    }
}

// Creo funcion para dar msg de comprar y "añadirlo"
// Array vacio para hacer push y agregar el juego a la bibloteca
let bibloteca = []

// agarro un h2 para insertarle texto
let finalizarCompraTexto = document.getElementById("msg-compra")

function finalizarCompra(){
    switch (comprarJuego) {
        case 1:
            comprarJuego = juego1.titulo
            alert(`¡Felecidades por tu nuevo juego "${juego1.titulo}" !`)
            // mensaje de juego añadido a bibloteca
            finalizarCompraTexto.innerHTML= `Su nuevo juego "${juego1.titulo}" ah sido añadido a su bibloteca`
            // Pusheamos el juego a la array
            bibloteca.push(juego1.titulo) 
            break;
        case 2:
            comprarJuego = juego2.titulo
            alert(`¡Felecidades por tu nuevo juego "${juego2.titulo}" !`)
            finalizarCompraTexto.innerHTML= `Su nuevo juego "${juego2.titulo}" ah sido añadido a su bibloteca<`
            bibloteca.push(juego2.titulo) 
            break;
        case 3:
            comprarJuego = juego3.titulo
            alert(`¡Felecidades por tu nuevo juego "${juego3.titulo}" !`)
            finalizarCompraTexto.innerHTML= `Su nuevo juego "${juego3.titulo}" ah sido añadido a su bibloteca`
            bibloteca.push(juego3.titulo) 
            break;
        case 4:
            comprarJuego = juego4.titulo
            alert(`¡Felecidades por tu nuevo juego "${juego4.titulo}" !`)
            finalizarCompraTexto.innerHTML= `Su nuevo juego "${juego4.titulo}" ah sido añadido a su bibloteca`
            bibloteca.push(juego4.titulo) 
            break;
        case 5:
            comprarJuego = juego5.titulo
            alert(`¡Felecidades por tu nuevo juego "${juego5.titulo}" !`)
            finalizarCompraTexto.innerHTML= `Su nuevo juego "${juego5.titulo}" ah sido añadido a su bibloteca`
            bibloteca.push(juego5.titulo) 
            break;
        case 6:
            comprarJuego = juego6.titulo
            alert(`¡Felecidades por tu nuevo juego "${juego6.titulo}" !`)
            finalizarCompraTexto.innerHTML= `Su nuevo juego "${juego6.titulo}" ah sido añadido a su bibloteca`
            bibloteca.push(juego6.titulo) 
            break;
        case 7:
            comprarJuego = juego7.titulo
            alert(`¡Felecidades por tu nuevo"${juego7.titulo}" !`)
            finalizarCompraTexto.innerHTML= `Su nuevo juego "${juego7.titulo}" ah sido añadido a su bibloteca`
            bibloteca.push(juego7.titulo) 
            break;
        default:
            break;
    }
}

// Llamamos a las funciones para hacer la funcionalidad
perdirOpcion()
pedirJuego()
finalizarCompra()

// Hacemos que pueda ver la bibloteca completa con sus juegos
let buttonBibloteca = document.getElementById("btn-bibloteca")
let tituloBibloteca = document.getElementById("bibloteca-titulo")
let juegosBibloteca = document.getElementById("juegos-bibloteca")

buttonBibloteca.addEventListener("click", ()=>{
    tituloBibloteca.style.display = "block";
    juegosBibloteca.innerHTML = bibloteca.join(" - ")
})


// Hacemos que pueda ver las opciones cuando el quiera
let buttonComprar = document.getElementById("btn-comprar")

buttonComprar.addEventListener("click", ()=>{
    perdirOpcion()
    pedirJuego()
    finalizarCompra()
})


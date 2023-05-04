const sectionReiniciar = document.getElementById('boton-reiniciar')
const sectionataques = document.getElementById('sa')
const sectionInicio = document.getElementById('sm')
const botonFuego = document.getElementById('boton-fuego')
const botonHielo = document.getElementById('boton-hielo')
const botonViento = document.getElementById('boton-viento')
const botonRayo = document.getElementById('boton-rayo')
const botonAgua = document.getElementById('boton-agua')
const botonOscuridad = document.getElementById('boton-oscuridad')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')


sectionReiniciar.style.display = 'none'
const sectionseleccionMascotaJugador = document.getElementById('boton-mascota')
const inputLanpier = document.getElementById('Lanpier')
const inputJack = document.getElementById('Jack')
const inputJuri = document.getElementById('Juri')
const inputSaira = document.getElementById('Saira')
const inputLirio = document.getElementById('Lirio')
const inputKaito = document.getElementById('Kaito')
const spanMascota = document.getElementById('mascota')


const spanMascotaEnemigo = document.getElementById('mascotae')


const spanvida = document.getElementById("vida")
const spanvidae = document.getElementById("vidae")


const sectionMensajes = document.getElementById('mensajes')
const parrafo = document.createElement('p')

const contenedorMascotas = document.getElementById('contenedorMascota')


let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let vidaJugador = 3
let vidaEnemigo = 3


class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Lanpier = new Mokepon('Lanpier', 'gif/zeraora-s.gif', 5)

let Jack = new Mokepon('Jack', 'gif/lunala.gif', 5)

let Juri = new Mokepon('Juri', 'gif/Necrozma_melena_crepuscular_EpEc.gif', 5)

let Saira = new Mokepon('Saira', 'gif/Zacian_EpEc_variocolor.gif', 5)

let Lirio = new Mokepon('Lirio', 'gif/zarude-1-s.gif', 5)

let Kaito = new Mokepon('Kaito', 'gif/Necrozma_EpEc.gif', 5)

Lanpier.ataques.push(
    { nombre: '🌪️', id: 'boton-viento' },
    { nombre: '💧',  id: 'boton-agua' },
    { nombre: '⚡',  id: 'boton-rayo' },    
)
Jack.ataques.push(
    { nombre: '🌪️', id: 'boton-viento' },
    { nombre: '🌑', id: 'boton-oscuridad' },
    
)
Juri.ataques.push(
    { nombre: '🌑', id: 'boton-oscuridad' },
    { nombre: '⚡', id: 'boton-rayo' },
)
Saira.ataques.push(
    { nombre: '🌪️', id: 'boton-viento' },
    { nombre: '🍧', id: 'boton-hielo' },
    { nombre: '💧',  id: 'boton-agua' },
)
Lirio.ataques.push(
    { nombre: '🌑', id: 'boton-oscuridad' },
    { nombre: '🌪️', id: 'boton-viento' },
    { nombre: '🔥',  id: 'boton-fuego' },
)
Kaito.ataques.push(
    { nombre: '🌪️', id: 'boton-viento' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '💧',  id: 'boton-agua' },
    { nombre: '🌑', id: 'boton-oscuridad' },
    { nombre: '🔥',  id: 'boton-fuego' },
)

mokepones.push(Lanpier, Jack, Juri, Saira, Lirio, Kaito)


function iniciarjuego(){
    
    
    sectionataques.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones =`
        <label class="tarjeta" for=${mokepon.nombre}>
        <input type="radio" id=${mokepon.nombre} name="mascota" />   
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto}>
        </label>
        `
        

    })

    botonMascotaJugador.addEventListener('click', seleccionMascotaJugador )

    sectionInicio.style.display = 'block'
    botonFuego.addEventListener('click', ataqueFuego)
    botonHielo.addEventListener('click', ataqueHielo)
    botonViento.addEventListener('click', ataqueViento)
    botonRayo.addEventListener('click', ataqueRayo)
    botonAgua.addEventListener('click', ataqueAgua)
    botonOscuridad.addEventListener('click', ataqueOscuridad)
    botonReiniciar.addEventListener('click', ReinciarJuego)
}


function seleccionMascotaJugador(){

    
    sectionInicio.style.display = 'none'
    sectionseleccionMascotaJugador.style.display = 'block'
    sectionataques.style.display = 'block'
    
    if (inputLanpier.checked) {
        spanMascota.innerHTML = 'Lanpier'
    }else if (inputJack.checked){
        spanMascota.innerHTML = 'Jack'
    }
    else if (inputJuri.checked){
        spanMascota.innerHTML = 'Juri'
    }
    else if (inputSaira.checked){
        spanMascota.innerHTML = 'Saira'
    }
    else if (inputLirio.checked){
        spanMascota.innerHTML = 'Lirio'
    }
    else if (inputKaito.checked){
        spanMascota.innerHTML = 'Kaito'
    } 
    else{
        alert('Selecciona Mascota')
    }
    
    seleccionMascotaEnemigo()

}

function seleccionMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,6) 

    if(mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Lanpier'
    }else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Jack'
    }else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Juri'
    }else if ( mascotaAleatorio == 4){
        spanMascotaEnemigo.innerHTML = 'Saira'
    }else if ( mascotaAleatorio == 5){
        spanMascotaEnemigo.innerHTML = 'Lirio'
    }else{
        spanMascotaEnemigo.innerHTML = 'Kaito'
    }
}

function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo() 
}
function ataqueHielo(){
    ataqueJugador = 'Hielo'
    ataqueAleatorioEnemigo() 
}
function ataqueViento(){
    ataqueJugador = 'Viento'
    ataqueAleatorioEnemigo() 
}
function ataqueRayo(){
    ataqueJugador = 'Rayo'
    ataqueAleatorioEnemigo() 
}
function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo() 
}
function ataqueOscuridad(){
    ataqueJugador = 'Oscuridad'
    ataqueAleatorioEnemigo() 
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,6)
    
        if(ataqueAleatorio == 1){
            ataqueEnemigo = 'Fuego'
        }else if (ataqueAleatorio == 2){
            ataqueEnemigo = 'Hielo'
        }else if (ataqueAleatorio == 3){
            ataqueEnemigo = 'Viento'
        }else if (ataqueAleatorio == 4){
            ataqueEnemigo = 'Rayo'
        }else if (ataqueAleatorio == 5){
            ataqueEnemigo = 'Agua'
        }else{
            ataqueEnemigo = 'Oscuridad'
        }
    combate()
}

function combate(){
    

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("Empate")
    }else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Hielo'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Hielo' && ataqueEnemigo == 'Viento'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Viento' && ataqueEnemigo == 'Rayo'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Rayo' && ataqueEnemigo == 'Agua'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Oscuridad' && ataqueEnemigo == 'Rayo'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Viento' && ataqueEnemigo == 'Oscuridad'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else{
        crearMensaje("Perdistes")
        vidaJugador--
        spanvida.innerHTML = vidaJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if (vidaEnemigo == 0){
        crearMensajeFinal("GANASTES")
    }else if (vidaJugador == 0)[
        crearMensajeFinal("PERDISTES")
    ]
}

function crearMensaje(resultado){
    
    parrafo.innerHTML =  resultado
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){

    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)
    botonFuego.disabled = true
    botonHielo.disabled = true
    botonViento.disabled = true
    botonRayo.disabled = true
    botonAgua.disabled = true
    botonOscuridad.disabled = true
    sectionReiniciar.style.display = 'block'
}


function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ReinciarJuego(){
    location.reload()
}


window.addEventListener('load', iniciarjuego)
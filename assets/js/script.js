const iframe = document.getElementsByTagName("iframe"); //se trae los ifraem donde se mostraran los videos
const boton = document.querySelector("btn");

let id = "";

class Multimedia{
    constructor(url){
        this.url = url; 
    }
    get url(){
        return this._url;
    }
    set url(url){
        this._url = url;
    }
    setInicio(valor) {
        console.log(`Este método es para realizar un cambio en la URL del video`);
    }
}

class Reproductor extends Multimedia(url, id){
    constructor(url, id){
        super(url);
        this._id = id;
    }
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
    playMultimedia() { 
        console.log(`funcion`);
    }
    setInicio() {
        //condicion dada en requerimientos
        this.id.setAtribute("src", `${this.url}?start=${tiempo}`);
        
    }
}

let musica = new Reproductor("https://www.youtube.com/embed/", "musica");
let pelicula = new Reproductor("https://www.youtube.com/embed/", "peliculas");
let serie = new Reproductor("https://www.youtube.com/embed/", "series");

boton.addEventListener("click", () => {
    if (boton.valor == "musica") { 
        id="musica"
        musica.playMultimedia();
    }
    else if(boton.valor == "peliculas") {
        id = "peliculas"
        pelicula.playMultimedia();
    }
    else if (boton.valor == "series") {
        id = "series"
        serie.playMultimedia();
    }}
)

let modulo = (() => {              //modulo IIFE
    //Funcion privada
    let agregarPrivado = (url,id) => {
        const seleccion = document.getElementById(id);
        seleccion.setAttribute("src", url);
    }
}
)
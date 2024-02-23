const botonSerie = document.getElementById("btnSerie");
const botonPelicula = document.getElementById("btnPelicula");
const botonMusica = document.getElementById("btnMusica");

botonMusica.addEventListener("click", function () {
  let musica = new Reproductor(
    "https://www.youtube.com/embed/kxyyKU8rgaU",
    "musica"
  );
  musica.playMultimedia();
});

botonPelicula.addEventListener("click", function () {
  let pelicula = new Reproductor(
    "https://www.youtube.com/embed/25GG9LAUHsA?si=-FsVmFYvu9qXv9I0",
    "peliculas"
  );
  pelicula.playMultimedia();
});

botonSerie.addEventListener("click", function () {
  let serie = new Reproductor(
    "https://www.youtube.com/embed/HhesaQXLuRY",
    "series"
    );
    serie.playMultimedia();
});

class Multimedia {
  constructor(url) {
    this._url = url;
  }
  get url() {
    return this._url;
  }
  set url(url) {
    this._url = url;
  }
  setInicio() {
    console.log(`Este método es para realizar un cambio en la URL del video`);
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  playMultimedia() {
    modulo.agregarPublico(this.url, this.id);
  }
  setInicio() {
    //condicion dada en requerimientos
    this.id.setAtribute("src", `${this.url}?start=${tiempo}`);
  }
}

let modulo = (() => {
  //modulo IIFE
  //Funcion privada
  let agregarPrivado = (url, id) => {
    const seleccion = document.getElementById(id);
    seleccion.setAttribute("src", url);
  };
  return {
    //Funcion publica
    agregarPublico: (url, id) => {
      agregarPrivado(url, id);
    },
  };
})();

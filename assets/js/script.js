const boton = document.querySelector("btn");

let idBoton = "";

class Multimedia {

  constructor(url) {
    this._url = url;
    };
  get url() {
    return this._url;
    };
  set url(url) {
    this._url = url;
  }
  setInicio() {
    console.log(`Este método es para realizar un cambio en la URL del video`);
  }
};

class Reproductor extends Multimedia(url, id) {
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
};

//la idea de trabajar con la lectura del boton es que al hacer click se ejecute la funcion playMultimedia, si se desea agregar nuevas opciones
//de reproduccion se puede hacer de la misma forma agregando un nuevo if

boton.addEventListener("click", () => {
    debugger;
  if (boton.valor == "musica") {
    idBoton = "musica";
    let musica = new Reproductor("https://www.youtube.com/embed/kxyyKU8rgaU?si=elzhCyZP3J9qfrz6", idBoton);   //si existe mas de una alternativa se puede realizar una funcion que determine la URL segun seleccion del usuario
    musica.playMultimedia();
  } else if (boton.valor == "peliculas") {
    idBoton = "peliculas";
    let pelicula = new Reproductor(
      "https://www.youtube.com/embed/I0_qFoptZ4Y?si=Vm_twXjZGkoVpht2", idBoton );
    pelicula.playMultimedia();
  } else if (boton.valor == "series") {
    idBoton = "series";
    let serie = new Reproductor(
      "https://www.youtube.com/embed/fWWrW_VLjws?si=1PVbCteqSx923-YY", idBoton );
    serie.playMultimedia();
  }
});

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

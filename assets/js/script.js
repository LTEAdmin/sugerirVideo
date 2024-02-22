const iframe = document.getElementsByTagName("iframe"); //se trae los ifraem donde se mostraran los videos

class Multimedia{
    constructor(url){
        this.url = url;
        
    }
    get url(){
        return this._url
    }
    set url(url){
        this._url = url
    }
    setInicio(valor) {
        console.log(`Este método es para realizar un cambio en la URL del video`)
        return
    }
}

class Reproductor extends Multimedia(url, id){
    constructor(url, id){
        super(url);
        this._id = id;
    }
    get id(){
        return this._id
    }
    set id(id){
        this._id = id
    }
    playMultimedia() { 
        console.log(`funcion`)
    }
    setInicio() {
        //condicion dada en requerimientos
        this.id.setAtribute("src", this.url)?start=${tiempo}
        
    }
}
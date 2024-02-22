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
        console.log(valor)
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
        this.id.setAtribute("src", this.url)
        return
    }
}
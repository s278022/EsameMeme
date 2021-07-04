

class Frase {

    constructor(id, testo, posOrizz, posVert) {
        this.id = id;
        this.testo = testo;
        this.posOrizz = posOrizz;
        this.posVert = posVert;
        
    }


    static from(json) {
        return new Frase(json.id, json.testo, json.posOrizz, json.posVert);
    }
}

export default Frase;
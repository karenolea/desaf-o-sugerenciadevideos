//Módulo mediante IIFE
let modificarIframe = (() =>{
    let agregaratr = (url,id) =>{
        document.getElementById(id).setAttribute('src',url);
    }
    return mostrartodo = (url,id) => agregaratr(url,id);
    
})();

// Clase padre "multimedia"
class Multimedia {
    constructor(url) {
        let _url = url;

        this.getUrl = () => {
            return _url;
        }
    }

    get url() {
        return this.getUrl();
    }

    SetInicio() {
        return `Este método es para realizar un cambio en la URL del video`;
    }
}

// Clase Reproductor 
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        let _id = id;

        this.getId = () => {
            return _id;
        }
    }

    get id() {
        return this.getId();
    }

    playMultimedia() {
        modificarIframe(this.url, this.id);
    }

    setInicio(tiempo) {
        document.getElementById(this.getId()).setAttribute('src', `${this.url}?start=${tiempo}`);

    }

}


//Instanciar, invocar metodo y utilizar setInicio

let musica = new Reproductor('https://www.youtube.com/embed/AOeY-nDp7hI', 'musica');
musica.setInicio(124);
musica.playMultimedia();

let pelicula = new Reproductor('https://www.youtube.com/embed/d9RRzmPEjBg', 'peliculas');
pelicula.setInicio(100);
pelicula.playMultimedia();

let series = new Reproductor('https://www.youtube.com/embed/s9APLXM9Ei8', 'series');
series.setInicio(60);
series.playMultimedia();
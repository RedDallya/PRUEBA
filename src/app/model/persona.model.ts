export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    profesion: string;
    descripcion: string;
    img: string;

    constructor(nombre: string, apellido: string, profesion: string,) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;

    }
}
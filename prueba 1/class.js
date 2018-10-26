// //ES5
// //definimos la clase
// let Persona = function (id, nom, ed) {
//     this.id = id;
//     this.nombre = nom;
//     this.edad = ed;
//     this.showInfo = function () {
//         return '[' + this.id + '] ' + this.nombre + ', ' + this.edad;
//     }

// }
// let Ricardo = new Persona(1, 'Ricardo', 33);
// //definimos un array de objetos de esa clase. OJO! El objeto concreto es una INSTANCIA de esa clase.
// let clase2 = [
//     new Persona(2, 'Sara', 33),
//     new Persona(3, 'Carlos', 44),
//     new Persona(4, 'Coca', 22),
// ];
// for (let index = 0; index < clase2.length; index++) {
//     console.log(clase2[index].showInfo());
//     console.log(Ricardo.showInfo);

// }


// //estoy creando una variable llamada ricardo que es igual a un objeto con esas propiedades. puedo controlar la estructura del objeto a reavces de la clase asi que puedo
// // Ricardo.id = 1;
// // Ricardo.nombre = 'Ricardo';
// // Ricardo.edad = 40;

// console.log(Ricardo)


//ES6

class Datospersonas{
    constructor(id, nom, ed){
        this.id=id;
        this.nom=nom;
        this.ed=ed;    
    }
//es un metodo. no hace falta añadirle function porque ya sabe que es una funcion.
    showInfo(){
        return '[' + this.id + '] ' + this.nom + ', ' + this.ed;
    }
}
let clase2 = [
        new Datospersonas (2, 'Caca', 33),
        new Datospersonas (3, 'Culo', 44),
        new Datospersonas (4, 'Pedo', 22),
        new Datospersonas (4, 'Pis', 22),
    ];
    
    for (let index = 0; index < clase2.length; index++) {
        console.log(clase2[index].showInfo());
    }
    
// let Sara = {
//     id: 387,
//     nombre: 'Sara',
//     apellido: 'Perez',
//     email: 'ss@h.com',
//     edad: 28,
//     gustaArte: true,
//     gustaFutbol: false,
//     saludar: function () {
//         return "Hola, me llamo " + this.nombre + "; tengo " + this.edad + " años y me gusta el arte.";
//     }

    //sara es el nombre de una variable. cuanto vale? todo el objeto. el this llama, dentro del propio objeto a los conceptos que se han definido.
// };

// console.log(Sara.saludar());
// console.log(Sara.gustaFutbol);

// let Abubu = {
//     id: 12,
//     nombre: 'Abubu',
//     apellido: 'Perez',
//     email: 'ss@h.com',
//     edad: 28,
//     gustaArte: true,
//     gustaFutbol: false,
//     amigos: [Sara],
// };
// console.log(Abubu.amigos);

//PRACTICAMOS INTRODUCIR OBJETOS DENTRO DEL ARRAY 

let persona1 = {
    id: 1,
    nombre: 'Ana',
    Edad: 25,
    showInfo:function () {return '['+this.id+'] '+this.nombre+', '+this.Edad + ' años'}
}
let persona2 ={
    id: 2,
    nombre: 'Sergio',
    Edad: 28,
    showInfo:function () {return '['+this.id+'] '+this.nombre+', '+this.Edad + ' años'}
}
let persona3 ={
    id: 3,
    nombre: 'Cristina',
    Edad: 29,
    showInfo:function () {return '['+this.id+'] '+this.nombre+', '+this.Edad + ' años'}
}

var clase = [persona1, persona2, persona3]
console.log(clase);

// //  CORRECCION OK
//      for (let index = 0; index < clase.length; index++) {
//     console.log('['+clase[index].id+'] '+clase[index].nombre+', '+clase[index].Edad + ' años');
// }    

for (let index = 0; index < clase.length; index++) {
console.log(clase[index].showInfo());
} 

//correccion en clase. 
// let clase = [{id:1, nombre:Sara, edad:28}, {id:1, nombre:Sara, edad:28}, {id:1, nombre:Sara, edad:28,}id:1, nombre:Sara, edad:28}]
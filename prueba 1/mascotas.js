var mis_mascotas = [];

mis_mascotas[0] = 'perrito 1';
mis_mascotas[1] = 'perrito 2';

for (let index = 0; index < 1000; index++) {
    mis_mascotas[index] = 'perrito ' + (index + 1);
}
console.log(mis_mascotas);

//esta console muestra como le asignamos valor a un array;

for (let index = 0; index < 1000; index++) {
    console.log("la mascota " + index + " se llama " + mis_mascotas[index]);
}
//consola



for (let index = 0; index < 1000; index++) {

    if (index == 0) {
        console.log("perrito "+index+" no tiene hermanos")
    }
    else {
        console.log("perrito "+index+" es hermano de " + (index - 1));
    }
}
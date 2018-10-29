let cambiarBoton = document.getElementById('btn1');
cambiarBoton.onclick = function () {

    let elParr = document.getElementById('parrafo');
    elParr.innerHTML = elParr.innerHTML.toUpperCase();
}

let cambiarBoton2 = document.getElementById('btn2');
cambiarBoton2.onclick = function () {

    let elParr = document.getElementById('parrafo');
    elParr.innerHTML = elParr.innerHTML.toLocaleLowerCase();
}



let cambiarBoton3 = document.getElementById('btn3');
cambiarBoton3.onclick = function () {

    let elParr = document.getElementById('parrafo').innerHTML;
    let palabrasTransf = [];
    let separat = elParr.split(' '); // aplicamos una array compuesto por todas las palabras del texto y el metodo de split que es separarlo en unidades.

    for (let index = 0; index < separat.length; index++) {
        palabrasTransf[index] = separat[index].toLocaleLowerCase().replace(separat[index].toLowerCase().charAt(0), separat[index].charAt(0).toUpperCase());

    }
    var palabrasTransfJunto = palabrasTransf.join(" ");
    console.log(palabrasTransfJunto); 
    document.getElementById("parrafo").innerHTML = palabrasTransfJunto;
}
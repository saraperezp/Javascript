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

// let cambiarBoton3 = document.getElementById('btn3');
// cambiarBoton3.onclick = function () {

//     let elParr = document.getElementById('parrafo');
//     elParr.innerHTML = elParr.innerHTML.toLocaleLowerCase();

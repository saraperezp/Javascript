let cambiarBoton = document.getElementById('cambiarbtn');
cambiarBoton.onclick = function () {
    let elTitulo = document.getElementById('titulo');
    elTitulo.innerHTML = 'HOLAQUETAL'
    elTitulo.style.color = 'red';
    let elParr = document.getElementById('parrafo');
    elParr.innerHTML = "JAJAJA!";
    elParr.style.color = 'blue';
    //background="yellow";

}
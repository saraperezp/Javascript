//amigos recibidos del servidor
let amigos = [
    { name: 'Chema', email: 's@gmail.com' },
    { name: 'Marta', email: 's@gmail.com' },
    { name: 'Rambo', email: 's@gmail.com' },
    { name: 'Farruquito', email: 's@gmail.com' },

];


// listaUl.innerHTML += '<li>'+ amigos[index].name +'</li>'; //parsear es transformar en objeto html. en cuanto metamos html dentro de innerhtml, transformamos el codigo en objeto html directamente. eso es parsear
//coger un elemento ej array y transformarlo en otro formato

function parseaAmigos(amigos) {
    let listaUl = document.getElementById("listaAmigos");

    for (let index = 0; index < amigos.length; index++) {
        listaUl.innerHTML += `<li>
    <div>${amigos[index].name}</div>
    <div>${amigos[index].email}</div>
    <div> <button class ='saluda' data-value ="${amigos[index].name}">Saludar</button></div>
    </li>`;
    }
    // saludaAmigos('saluda', 'data-value');
}
parseaAmigos(amigos); // tenemos que llamar a la funcion

//procesar
function saludaAmigos(classbtn, attriname) {
    let saludaBtns = document.getElementsByClassName(classbtn);
    for (let index = 0; index < saludaBtns.length; index++) {
        saludaBtns[index].onclick = function () {
            alert(this.getAttribute(attriname));
        }

    }
}


saludaAmigos('saluda', 'data-value');


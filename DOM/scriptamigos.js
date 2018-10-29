let saludaBtns = document.getElementsByClassName('saluda');
console.log(saludaBtns);

for (let index = 0; index < saludaBtns.length; index++) {
    saludaBtns[index].onclick = function () {
        let name = this.getAttribute('data-name');
        let idp = this.getAttribute('data-idp');
        let infop = document.getElementById(idp).innerHTML;
        alert(infop + ' soy ' + name);
        // +'Oh qué paso!, soy '+ name + '!');

    }
}

let borraBtns = document.getElementsByClassName('borra');
console.log(borraBtns);

for (let index = 0; index < borraBtns.length; index++) {
    borraBtns[index].onclick = function () {

        let idli = this.getAttribute('data-idli');
        removeElement(idli);
    }
}
function removeElement(id) {
    var elem =document.getElementById(id);
    return elem.parentNode.removeChild(elem);  
      
} //estamos declarando la funcion solamente. siempre las declaramos fuera del for porque las queremos reutilizar. los eventos son sincronos o asincronos. el evento onclick es futuro. todas las interfaces son asincronas. el cofdigo esta hecho antes de que sucedan los eventos que dependen de la decision del futuro
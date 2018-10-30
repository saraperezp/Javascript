
$.ajax({
    url: 'http://www.mocky.io/v2/5bd88b1c310000f735474f1e',
}).done(function (datanotas) {
    console.log(datanotas);
    generateStructure(datanotas, 'piano');
});

function associateAndPlayNotes() {
    let player = document.getElementById('player');
    // los elementos del array se almacenan en element
    document.querySelectorAll('section div').forEach(element => {
        element.onclick = function () {
            let idx = this.getAttribute('data-idx');
            player.src = notas[idx].sonido;
            player.play();
        }
    });

}
associateAndPlayNotes();

function generateStructure(arrNotes, divN) {
    let finalHtml = '';

    arrNotes.forEach(element => {
        finalHtml += element.tono ? `<div class="note" data-snd="${element.sonido}"></div>` : `<div class="note semi" data-snd="${element.sonido}"></div>`;
    });

    document.getElementById(divN).innerHTML = finalHtml;
    associateAndPlayNotes();
}

function associateAndPlayNotes() {
    let player = document.getElementById('player');

    document.querySelectorAll('.note').forEach(element => {
        element.onclick = function () {
            player.src = this.getAttribute('data-snd');
            player.play();
        }
    });

}


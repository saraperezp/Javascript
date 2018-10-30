let notas = [
    { name: 'do', sonido: "./wav/c1.wav" },
    { nombre: 'dos', sonido: './wav/c1s.wav' },
    { nombre: 're', sonido: './wav/d1.wav' },
    { nombre: 'res', sonido: './wav/d1s.wav' },
    { nombre: 'mi', sonido: './wav/e1.wav' },
    { nombre: 'fa', sonido: './wav/f1.wav' },
    { nombre: 'fas', sonido: './wav/f1s.wav' },
    { nombre: 'sol', sonido: './wav/g1.wav' },
    { nombre: 'sols', sonido: './wav/g1s.wav' },
    { nombre: 'la', sonido: './wav/a1.wav' },
    { nombre: 'las', sonido: './wav/a1s.wav' },
    { nombre: 'si', sonido: './wav/b1.wav' },
];

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

// montar el html con un parsea




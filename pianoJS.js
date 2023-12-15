const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener("click", () => playNote(key));
    console.log(key.dataset.key);
})

document.addEventListener('keydown', playNote);

function playNote(key) {
    if (key.repeat) { return; }
    const noteAudio = document.getElementById(key.keyCode);
    noteAudio.currentTime = 0;
    noteAudio.play();

    const pressedKey = document.querySelector(`.key[data-key="${key.keyCode}"]`);
    pressedKey.classList.add('pressed');
    noteAudio.addEventListener('ended', () => {
        pressedKey.classList.remove('pressed');
    })
}
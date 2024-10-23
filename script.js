function playSound(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // остановка функции после  выполнения
    
    audio.currentTime = 0; // убираем задержку после нажатия
    audio.play();
    key.classList.add('playing');
}

function removeTransition (e) {
    if (e.propertyName !== 'transform') return; // пропускаем это если не "transform"
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound);
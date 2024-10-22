const createRainCharacter = () => {
    const rainCharacter = document.createElement('div');
    rainCharacter.className = 'rain-character';
    rainCharacter.innerText = String.fromCharCode(32 + Math.random() * (100 - 20)); 
    rainCharacter.style.left = Math.random() * 100 + 'vw';
    rainCharacter.style.animationDuration = Math.random() * 3 + 4 + 's';

    document.getElementById('rain').appendChild(rainCharacter);

    setTimeout(() => {
        rainCharacter.remove();
    }, 5000);
};

setInterval(createRainCharacter, 50); 
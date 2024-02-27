const startColorGenerator = document.querySelector('#start');
const stopColorGenerator = document.querySelector('#stop');
const insertColorCode = document.querySelector('.color_code');

// Random color generator
function randomColorGenerator() {
    const hexCode = '0123456789ABCDEF';
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        randomColor += hexCode[Math.floor(Math.random() * 16)]
    }
    return randomColor;
}



let intervelID;
function startChangingBackgroundColor() {
    if (!intervelID) {
        intervelID = setInterval(randomColorChanger, 1000);
    }
    function randomColorChanger() {
        document.body.style.backgroundColor = randomColorGenerator();
        insertColorCode.innerHTML = randomColorGenerator();
    }
}

function stopChangingBackgroundColor() {
    clearInterval(intervelID);
    intervelID = null;
}

startColorGenerator.addEventListener('click', startChangingBackgroundColor);
stopColorGenerator.addEventListener('click', stopChangingBackgroundColor);
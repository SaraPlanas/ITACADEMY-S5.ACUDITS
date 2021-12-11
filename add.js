const button = document.querySelector('.container button');
const bromaText = document.querySelector('.container p')
const tempsText = document.querySelector('.temps p')
const gradoText = document.querySelector('.temps h4')


function image() {
    var images = ['blob.svg', 'blob1.svg', 'blob2.svg', 'blob3.svg', 'blob4.svg', 'blob5.svg'];

    let imagenAleatoria = images[Math.floor(Math.random() * images.length)]

    document.body.style.backgroundImage = ("url(img/" + (imagenAleatoria) + ")");
}

var today = new Date;
var reportAcudits = []


function addToList(score) {
    var reportAcudit = {}
    reportAcudit.joke = bromaText.innerHTML;
    reportAcudit.score = score;
    reportAcudit.date = new Date().toISOString()
    reportAcudits.push(reportAcudit)
    console.log(reportAcudits)
}

async function getBroma() {
    const bromaData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    const bromaObj = await bromaData.json();
    bromaText.innerHTML = bromaObj.joke;
}

async function getBromaChuck() {
    const bromaDataChuck = await fetch('https://api.chucknorris.io/jokes/random', {
        headers: {
            'Accept': 'application/json'
        }
    })
    const bromaObjChuck = await bromaDataChuck.json();
    bromaText.innerHTML = bromaObjChuck.value;
}

async function getTiempo() {
    const tempsData = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=10f9b5b8eb548e0af3a7418fb76a0d4d&lang=ca&units=metric', {
        headers: {
            'Accept': 'application/json'
        }
    })
    const tempsObj = await tempsData.json();
    const temp = tempsObj['weather'].map(weather => weather.icon);
    var icon = ('http://openweathermap.org/img/wn/' + temp + "@2x.png");
    tempsText.innerHTML = ("<img src = " + icon + " >");
    gradoText.innerHTML = tempsObj.main.temp + (" ºC ");

}

function randomAcudits() {
    document.getElementById("button1").hidden = false;
    document.getElementById("button2").hidden = false;
    document.getElementById("button3").hidden = false;

    if (numeroAleatorio() == 0) {
        getBroma()
    } else {
        getBromaChuck()
    }

}

function numeroAleatorio() {
    var num = [0, 1]
    return Math.round(Math.random(num));
}
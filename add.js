// @ts-check

const button = document.querySelector('.container button');
const bromaText = document.querySelector('.container p')

async function getBroma() {

    document.getElementById("button1").hidden = false;
    document.getElementById("button2").hidden = false;
    document.getElementById("button3").hidden = false;

    const bromaData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })

    const bromaObj = await bromaData.json();
    bromaText.innerHTML = bromaObj.joke;
    console.log(bromaData)

}

/*
function getBroma() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })

    .then(data => data.json())
        .then(obj => bromaText.innerHTML = obj.joke)
}
*/
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
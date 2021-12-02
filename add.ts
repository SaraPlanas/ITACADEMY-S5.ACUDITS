/* // @ts-check

const button = document.querySelector('.container button');
const bromaText = document.querySelector('.container p')
document.addEventListener('DOMContentLoaded', getBroma)
const otraBroma = document.getElementById('otraBroma');
otraBroma.addEventListener('click', getBroma);
/*
async function getBroma(){
    const bromaData = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    })
    
    const bromaObj = await bromaData.json();
    bromaText.innerHTML=bromaObj.joke;
    console.log(bromaData)

}*/

/*0
function getBroma() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })

    .then(data => data.json())
        .then(obj => bromaText.innerHTML = obj.joke)
}


interface ReportAcudit {
    joke: String,
        score: Number,
        date: Date
}

var reportAcudits:ReportAcudit[] 


function addToList(i) {

    const reportAcudit = {
joke: bromaText.innerText
    }
    reportAcudits.joke = bromaText.innerText;
    reportAcudits.score = i;
    reportAcudits.date = new Date()


}


console.log(reportAcudits) */
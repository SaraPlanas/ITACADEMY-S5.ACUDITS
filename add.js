const button = document.querySelector('.container button');
const bromaText = document.querySelector('.container p')
document.addEventListener('DOMContentLoaded', getBroma)
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


function getBroma() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })

    .then(data => data.json())
        .then(obj => bromaText.innerHTML = obj.joke)
}

var today = new Date;

var reportAcudits = [{
    joke: String,
    score: Number,
    date: today.toISOString()
}]


function addToList(i) {

    reportAcudits.joke = bromaText.innerText;
    reportAcudits.score = i;
    reportAcudits.date = today
}
console.log(reportAcudits)
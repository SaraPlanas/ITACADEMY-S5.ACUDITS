const button = document.querySelector('.container button');
const bromaText = document.querySelector('.container p')
document.addEventListener('DOMContentLoaded', getBroma)
button.addEventListener('click', getBroma);

async function getBroma(){
    const bromaData = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    })
    
    const bromaObj = await bromaData.json();
    bromaText.innerHTML=bromaObj;
    console.log(bromaData)

}
/*
function getBroma(){
    fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    })
    
    .then(data=> data.json())
    .then(obj => bromaText.innerHTML=obj)}*/

const search = document.querySelector('.search');

// Remove 'active' class on page load
window.addEventListener('load', () => {
    search.classList.remove('active');
});

// Toggle class on click
search.addEventListener('click', () => {
    search.classList.toggle('active');
});

window.addEventListener('load', () => {
    document.querySelector('.select').classList.remove('btn')
})

document.querySelector(".option2").addEventListener('click', () => {
    document.querySelector('.select').classList.toggle('btn')
})

window.addEventListener('load', () => {
    document.querySelector('.list').classList.remove('ttn')
})

document.querySelector(".menu").addEventListener('click', () => {
    document.querySelector('.list').classList.toggle('ttn')
})

window.addEventListener('load', () => {
    document.querySelector('.menu').classList.remove('mm')
})

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('mm')
})

let length = 20;

for (let i=1; i<= length; i++) {   

    document.querySelector(`.img${i}`).style.backgroundImage = `url("assent/song${i}.jpg")`
    
    let don = document.querySelector(`.song${i}`).children[1];
    if(don.innerHTML.includes("Song")){
        // don.nnerHTML = prompt("enter your song name")
    }    
    console.log(i)
    let doon = document.querySelector(`.song${i}`).children[2];
    if(doon.innerHTML.includes("singer name")){
        // doon.innerHTML = prompt("enter your singer name")
    }    
    

    
    
}

// for(let i=1; i<=length; i++){
//     let value = prompt(`enter your singer name for ${i}`)
//     document.querySelector(`.song${i}`).children[1].innerHTML=value
// }






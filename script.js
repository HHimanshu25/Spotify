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

document.querySelector('.img').addEventListener('dblclick',()=>{
    addsong()
})
let last = 6;

function addsong() {
    last = last + 1;
    newsong(last);
}

function newsong(idx) {
    
    let div = document.createElement("div");
    div.setAttribute("class", "song");

    for (let j = 0; j < 4; j++) {
        let span = document.createElement("span");
        if (j == 0) {
            span.setAttribute("class", `img img${idx}`);
            span.style.backgroundImage = `url('./assent/song${idx}.jpg')`;
            
        }
        else if (j == 1) {
            setTimeout(() => {
                span.setAttribute("class", "so");
                span.innerHTML = prompt("enter yoru song name");
                // span.innerHTML = "song"
            }, 1000);
        } else if (j == 2) {
            setTimeout(() => {
                span.setAttribute("class", "sign");
                span.innerHTML = prompt("enter singer name");
                // span.innerHTML = "singer name";
            }, 1000)
        }
        else {
            span.id="plbutt"
            span.className="material-symbols-outlined"
            span.innerHTML="play_arrow"
        };
        div.appendChild(span);
    }

    document.querySelector(".songs").append(div);
}

let lasi = 1;

function addart() {
    ++lasi;
    artist(lasi);
}
function artist(idx) {

    let div = document.createElement("div");
    div.setAttribute("class", "artist");

    for (let j = 0; j < 3; j++) {
        let span = document.createElement("span");
        if (j == 0) {
            span.setAttribute("class", "photo");
           
        }
        else if (j == 1) {
            setTimeout(() => {
                span.setAttribute("class", "so");
                span.innerHTML = 'Singer';
            }, 1000);
        } else if (j == 2) {
            setTimeout(() => {
                span.setAttribute("class", "sign");
                span.innerHTML = 'Artist'
            }, 1000)
        }
        else {
            break;
        };
        div.appendChild(span);
    }

    document.querySelector(".artits").append(div);
}

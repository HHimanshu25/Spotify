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
        
        window.addEventListener('load',()=>{
            document.querySelector('.list').classList.remove('ttn')
        })
       
        document.querySelector(".menu").addEventListener('click', ()=>{
            document.querySelector('.list').classList.toggle('ttn')
        })

        window.addEventListener('load',()=>{
            document.querySelector('.menu').classList.remove('mm')
        })

        document.querySelector('.menu').addEventListener('click', ()=>{
            document.querySelector('.menu').classList.toggle('mm')
        })
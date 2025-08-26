const search = document.querySelector('.search');

        // Remove 'active' class on page load
        window.addEventListener('load', () => {
            search.classList.remove('active');
        });

        // Toggle class on click
        search.addEventListener('click', () => {
            search.classList.toggle('active');
        });

        document.querySelector(".option2").addEventListener('load', () => {
            document.querySelector('.select').classList.remove('btn')
        })

        document.querySelector(".option2").addEventListener('click', () => {
            document.querySelector('.select').classList.toggle('btn')
        })
let mySwitch = document.querySelector(".switch");
// console.log('yes');

let btn = document.querySelector(".btn");
// console.log(btn);

let container = document.querySelector(".container");
// console.log(container);

let title = document.querySelector("h1");


// let icon = document.querySelector(".sun");





//j'utlise ma variable , pour appliquer l'action sur le switch
mySwitch.addEventListener('click', () => {
    
    btn.classList.toggle('active');
    container.classList.toggle('containerChange');
    // icon.classList.toggle('sun');

    // if (title.classList.contains('text')) {
    //     title.textContent = "LIGHT MODE";
    // }
        

    if (title.classList.contains('textLight')) {
        title.textContent= 'LIGHT MODE'; // Texte pour le mode clair
    } else {
        title.textContent = 'DARK MODE'; // Texte pour le mode sombre

        
    }

    });



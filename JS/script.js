console.log('JS OK')


/* 
STEPS

1.Creazione di una lista di array con le source delle img.

2. Recupero gli elementi di'interesse all'interno del DOM.

3. Generero le img da inserire all'interno del DOM, con il loop For.

4. Aggiungo la classe active all'img in mostra.

5.Al click del BTN next aggiungere la classe active all'img succesiva e toglierlo a quella corrente.

6.Al click del BTN next aggiungere la classe active all'img precedente e toglierlo a quella corrente.

*/

/* Fase di preparazione */

//1.Creazione di una lista di array con le source delle img.
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

//2. Recupero gli elementi di'interesse all'interno del DOM.
const galleryImgs = document.getElementById('gallery');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

/* fase di elaborazione */

//3. Generero le img da inserire all'interno del DOM, con il loop For.

for (let i = 0; i < sources.length; i++) {
    const src = sources[i];
    const img = document.createElement('img');

    img.src = src;
    img.alt = `0${i + 1}.web`;
    galleryImgs.appendChild(img);

}

const images = document.querySelectorAll('#gallery img');
console.log(images)

//4. Aggiungo la classe active all'img in mostra.
let currentActiveImage = 0;
images[currentActiveImage].classList.add('active')



/* Gestione degli eventi */

/*5.Al click del BTN-next aggiungere la classe active all'img succesiva 
    e toglierlo a quella corrente.*/

nextButton.addEventListener('click', function () {
    images[currentActiveImage].classList.remove('active');

    //5.b incremento del indice per poter dare la classe active al img succesiva.
    currentActiveImage++;

    //5.c aggiungere la classe active all'image sucessiva.
    images[currentActiveImage].classList.add('active')

})


/*6.Al click del BTN-prev aggiungere la classe active all'img precedente
 e toglierlo a quella corrente.*/


prevButton.addEventListener('click', function () {
    images[currentActiveImage].classList.remove('active');

    //6.b incremento del indice per poter dare la classe active al img succesiva.
    currentActiveImage--;

    //6.c aggiungere la classe active all'image sucessiva.
    images[currentActiveImage].classList.add('active')

})


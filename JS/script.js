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
const sources = ['img/01.webp', 'img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

//2. Recupero gli elementi di'interesse all'interno del DOM.
const galleryImgs = document.getElementById('gallery');

const prevButton = documet.getElementById('prev');

const nextButton = documet.getElementById('next');

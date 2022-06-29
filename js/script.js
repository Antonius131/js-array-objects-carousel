const images = [
   {
       url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
       title: 'Svezia',
       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
   },

   {
       url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
       title: 'Perù',
       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
   },

   {
       url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
       title: 'Chile',
       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
   },
   {
       url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
       title: 'Argentina',
       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
   },
   {
       url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
       title: 'Colombia',
       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
   },
];


/**
 * 
 *    - dato l'array di oggetti 'images', popolare l'html con gli oggetti inseriti all'interno del markup pensato
 *    - al click sui pulsanti "prev" e "next", visualizzarsi la prossima immagine, popolata con gli elementi degli oggetti
 */


// put object array in DOM
const imgWrapper = document.getElementById('img-wrapper');

for (let i=0; i<images.length; i++) {

   const arrayObject = images[i];
   imgWrapper.innerHTML  +=  `<div class="img-description">
                                 <img src="${arrayObject.url}" alt="">
                                 <div id="description" class="px-5 py-4 position-absolute bottom-0 start-0 text-white">
                                 <h2 class="title">${arrayObject.title}</h2>
                                 <p class="description">${arrayObject.description}</p>
                              </div>`

}

// add class "active" in the first img-description element
const imgList = document.querySelectorAll('.img-description');
let imgIndex = 0;
imgList[imgIndex].classList.add('active');


// add eventListener on buttons
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

console.log(imgList);
console.log(imgIndex);

nextBtn.addEventListener('click', function() {
   imgList[imgIndex].classList.remove('active');

   imgIndex++;

   if (imgIndex === imgList.length) {
      imgIndex = 0;
   }

   imgList[imgIndex].classList.add('active');

   console.log(imgIndex)

});

prevBtn.addEventListener('click', function() {
   imgList[imgIndex].classList.remove('active');

   imgIndex--;

   if (imgIndex < 0) {
      imgIndex = imgList.length - 1;
   }

   imgList[imgIndex].classList.add('active');

   console.log(imgIndex);

});
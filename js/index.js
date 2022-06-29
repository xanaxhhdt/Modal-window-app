'use strict';

let fruits = [
   { id: 1, title: 'Яблоки', price: 20, img: 'https://via.placeholder.com/500' },
   { id: 2, title: 'Апельсины', price: 30, img: 'https://via.placeholder.com/1500' },
   { id: 3, title: 'Манго', price: 40, img: 'https://via.placeholder.com/900' },
];

const toHtml = fruit => `
   <div class="row__item">
      <div class="card__image">
         <img src="${fruit.img}">
      </div>
      <div class="card__body">
         <h2 class="card__title">
            ${fruit.title}
         </h2>
         <p class="card__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, iste.
         </p>
         <a href="#" class="btns card__primary" data-btn="price" data-id="${fruit.id}">Click</a>
         <a href="#" class="btns card__danger" data-btn="remove" data-id="${fruit.id}">delete</a>
      </div>
   </div>
`;

function render() {
   const html = fruits.map(item => toHtml(item)).join('');
   document.querySelector('#fruits').innerHTML = html;
}
render();


const priceModal = $.modal({
   title: 'Цена на товар',
   closable: true,
   width: '400px',
   footerButtons: [
      {
         text: 'Close', type: 'submit', handler() {
            priceModal.close();
         }
      },
   ]
});



document.addEventListener('click', (e) => {
   e.preventDefault();
   const btnType = e.target.dataset.btn;
   const id = +e.target.dataset.id;
   const fruit = fruits.find(item => item.id === id);


   if (btnType == 'price') {
      console.log(fruit);

      priceModal.setContent(`
         <p>Цена на ${fruit.title}: <strong>${fruit.price}</strong></p>
      `);
      priceModal.open();
   } else if (btnType == 'remove') {
      $.confirm({
         title: 'Вы уверены?',
         content: `<p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>`
      })
         .then(() => {
            fruits = fruits.filter(item => item.id !== id);
            render();
         })
         .catch(() => {
            console.log('Cancel');
         });
   }
});
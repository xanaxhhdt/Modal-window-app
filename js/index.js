'use strict';

const fruits = [
   { id: 1, title: 'Яблоки', price: 20, img: 'https://via.placeholder.com/500' },
   { id: 2, title: 'Апельсины', price: 30, img: 'https://via.placeholder.com/1500' },
   { id: 3, title: 'Манго', price: 40, img: 'https://via.placeholder.com/900' },
];

const modal = $.modal({
   title: 'Vlad modal',
   closable: true,
   content: `
      <p>Lorem ipsum dolor sit.</p>
      <p>Lorem ipsum dolor sit.</p>
   `,
   width: '400px',
   footerButtons: [
      {
         text: 'Okay', type: 'submit', handler() {
            console.log('Prime Btn');
            modal.close();
         }
      },
      {
         text: 'Cancel', type: 'submit', handler() {
            console.log('Danger Btn');
            modal.close();
         }
      },
   ]
});


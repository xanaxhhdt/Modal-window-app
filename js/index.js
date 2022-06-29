'use strict';

const fruits = [
   { id: 1, title: 'Яблоки', price: 20, img: 'a' },
   { id: 2, title: 'Апельсины', price: 30, img: 'a' },
   { id: 3, title: 'Манго', price: 40, img: 'a' },
];

const modal = $.modal({
   title: 'Vlad modal',
   closable: true,
   content: `
      <p>Lorem ipsum dolor sit.</p>
      <p>Lorem ipsum dolor sit.</p>
   `,
   width: '400px',
});


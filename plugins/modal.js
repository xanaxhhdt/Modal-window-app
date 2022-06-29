'use strict';
function _createModal(options) {
   const modal = document.createElement('div');
   modal.classList.add('modal');
   modal.insertAdjacentHTML('afterbegin', ` 
      <div class="modal__overlay">
         <div class="modal__window">
            <div class="modal__header">
               <span class="modal__title">Modal Title</span>
               <span class="modal__close">&times</span>
            </div>
            <div class="modal__body">
               <p>Lorem ipsum dolor sit.</p>
               <p>Lorem ipsum dolor sit.</p>
            </div>
            <div class="modal__footer">
               <button>ok</button>
               <button>cancel</button>
            </div>
         </div>
      </div>
   `);
   document.querySelector('.container').after(modal);
   return modal;
}

$.modal = function (options) {
   const $modal = _createModal(options);

   return {
      open() {
         $modal.classList.add('open');
      },
      close() {
         $modal.classList.remove('open');
      },
      destroy() { },
   };
};
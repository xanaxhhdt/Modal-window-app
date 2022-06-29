'use strict';
function _createModal(options) {
   const DEFAULT_WIDTH = '600px';
   const modal = document.createElement('div');
   modal.classList.add('modal');
   modal.insertAdjacentHTML('afterbegin', ` 
      <div class="modal__overlay" data-close="true">
         <div class="modal__window" style="width:${options.width || DEFAULT_WIDTH}">
            <div class="modal__header">
               <span class="modal__title"> ${options.title || 'Окно'}</span>
               ${options.closable ? `<span class="modal__close" data-close="true">&times</span>` : ''}
            </div>
            <div class="modal__body">
               ${options.content || ''}
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
   const ANIMETION_SPEED = 200;
   const $modal = _createModal(options);
   let closing = false;
   let destroyed = false;

   const modal = {
      open() {
         if (destroyed) {
            return console.log('Modal');
         }
         !closing && $modal.classList.add('open');
      },
      close() {
         closing = true;
         $modal.classList.remove('open');
         $modal.classList.add('hide');
         setTimeout(() => {
            $modal.classList.remove('hide');
            closing = false;
         }, ANIMETION_SPEED);
      },
   };

   const listerner = e => {
      if (e.target.dataset.close) {
         modal.close();
      }
   };

   $modal.addEventListener('click', listerner);

   return Object.assign(modal, {
      destroy() {
         $modal.remove();
         $modal.removeEventListener('click', listerner);
         destroyed = true;
      }
   });
};
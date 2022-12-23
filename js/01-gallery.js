import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");
galleryContainerEl.insertAdjacentHTML(
  "beforeend",
  createGallerygalleryItems(galleryItems)
);

galleryContainerEl.addEventListener("click", onGalleryItemChangeSize);

function createGallerygalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `;
    })
    .join("");
}

function onGalleryItemChangeSize(event) {
  event.preventDefault();
  const previewSizeImg = event.target.src;
  onItemModalWindowCreate();
  event.target.src = previewSizeImg;
}

function onItemModalWindowCreate() {
 
  const instance = basicLightbox.create(`
      <img src= "${(event.target.src = event.target.dataset.source)}">`
      , 
    {
      onShow: (instance) => { window.addEventListener("keydown", onEscModalClose.bind(instance)) },
      onClose: (instance) => { window.removeEventListener("keydown", onEscModalClose) }
    }
      );
  instance.show();
  }
  
  function onEscModalClose(event) {
    if (event.code === "Escape") {
      this.close()
    }
  }
  
 


// ВАРІАНТ СКИДАННЯ ПО ЕСКЕЙПУ ВРУЧНУ (БЕЗ МЕТОДІВ onShow, onClose)

// function onItemModalWindowCreate() {
//   window.addEventListener("keydown", onEscModalClose);
//   const instance = basicLightbox.create(`
//       <img src= "${(event.target.src = event.target.dataset.source)}">`);
//   instance.show();

//   function onEscModalClose() {
//     console.log(event.code);
//     if (event.code === "Escape") {
//       instance.close();
//       window.removeEventListener("keydown", onEscModalClose);
//     }
//   }
// }
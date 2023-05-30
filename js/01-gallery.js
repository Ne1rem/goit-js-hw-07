import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

// create li elements images
createImageItems();

function createImageItems() {
  const importImageOnScreen = createImageElements(galleryItems);
  galleryList.innerHTML = importImageOnScreen.join('');
}

function createImageElements(items) {
  return items.map(item => `<li class="gallery__item"><a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" /></a></li>`);
}

// create modal click
const onContainerClick = (el) => {
  el.preventDefault();

  if (el.target.classList.contains('gallery')) return;
  const source = el.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `);

  instance.show();
};

galleryList.addEventListener('click', onContainerClick);

document.addEventListener('keydown', function(el) {
  if (el.key === 'Escape') {
    hideModal();
  }
});

function hideModal() {
  const modal = document.querySelector('.basicLightbox');
  modal.classList.remove('basicLightbox--visible');
}

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

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
  });
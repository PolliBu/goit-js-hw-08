// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const container = document.querySelector('.gallery');
const itemsMarkup = createMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', itemsMarkup);

function createMarkup(items) {
    return items
         .map(({ original, preview, description }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
  </a>
</li>`)
        .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});

container.style.listStyle = "none";

console.log(lightbox);


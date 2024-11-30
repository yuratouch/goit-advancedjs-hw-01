import SimpleLightbox from 'simplelightbox';
import galleryData from './galleryData.json';

const generateGalleryMarkup = images => {
  return images.reduce((acc, { original, preview, description }) => {
    return (
      acc +
      `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
        </a>
      </li>`
    );
  }, '');
};

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = generateGalleryMarkup(galleryData);

new SimpleLightbox('.gallery a.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

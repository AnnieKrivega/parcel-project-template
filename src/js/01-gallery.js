import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist.simple-lightbox.min.css'

console.log(galleryItems);

const gallery = document.querySelector('.gallery')
const items = [];

galleryItems.forEach(element => {
    const galleryItem = document.createElement('div')
    galleryItem.className = 'gallery__item'
    const galleryLink = document.createElement('a')
    galleryLink.className = 'gallery__link'
    galleryLink.href = element.original
    const galleryImage = document.createElement('img')
    galleryImage.className = 'gallery__image'
    galleryImage.src = element.preview;
    galleryImage.setAttribute('data-source', element.original)
    galleryImage.set = element.description;

    galleryItem.append(galleryLink)
    galleryLink.append(galleryImage)
    items.push(galleryItem)
})

gallery.append(...items)

gallery.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
})
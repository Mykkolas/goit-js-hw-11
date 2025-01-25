// @ts-nocheck
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery")


const renderImages = (data) => {
    const { hits } = data;
    
    if (hits.length === 0) {
        iziToast.show({
            message: "Sorry, there are no images matching your search query. Please try again!",
            messageColor: 'white',
            position: 'topRight',
            backgroundColor: 'red',
            close: false,
            progressBar: false,
        })
        return ""
    }
    
    return hits
        .map(
            ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
                return `
                <div class="image-card">
            <a href="${largeImageURL}" target="_blank">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <div class="image-info">
                <p>Likes ${likes}</p>
                <p>Views ${views}</p>
                <p>Comments ${comments}</p>
                <p>Downloads ${downloads}</p>
            </div>
        </div>`
            }
    ).join("") 
    
}

export const renderGallery = (data) => {
    const markup = renderImages(data);
    gallery.innerHTML = markup;
    const lightbox = new SimpleLightbox(".gallery a", {
         captions: true,
    captionsData: "alt",
        captionDelay: 250,
    })
    lightbox.refresh()
};
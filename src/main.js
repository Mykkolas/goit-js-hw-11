// @ts-nocheck
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery } from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector("form");
const gallery = document.querySelector(".gallery");


function main() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const query = formData.get("search-input");

        if (!query) {
            iziToast.show({
                message: "Input is empty!",
                messageColor: "white",
                position: "topRight",
                backgroundColor: "red",
                close: false,
                progressBar: false,
            });
            return;
        }

        form.reset();
        gallery.innerHTML = `<span class="loader"></span>`;

        fetchImages(query)
            .then((data) => {
                renderGallery(data);
                initializeLightbox(); 
            })
            .catch((err) => {
                console.error("Error:", err);
                gallery.innerHTML = ""
            });
    });
}

function initializeLightbox() {
   
   const lightbox = new SimpleLightbox(".gallery a", {
        captions: true,
        captionsData: "alt",
        captionDelay: 250,
    });
    lightbox.refresh();
}

main();

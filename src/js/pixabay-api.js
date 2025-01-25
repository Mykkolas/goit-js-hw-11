import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { renderGallery } from "./render-functions";

const gallery = document.querySelector(".gallery")
const APIKEY = "48409892-84416e27ee3da12ba614fc4d7"
const form = document.querySelector("form")
function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const query = formData.get("search-input")

    if (!query) {
        iziToast.show({
            message: "Input is empty!",
            messageColor: 'white',
            position: 'topRight',
            backgroundColor: 'red',
            close: false,
            progressBar: false,
        })
        return
    }
    form.reset()
    fetchImages(query)
}


function fetchImages(query) {
    const options = {
    key: APIKEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
}

    const params = new URLSearchParams(options).toString();
    const url = `https://pixabay.com/api/?${params}`;

    gallery.innerHTML = `<span class="loader"></span>`;
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json()            
        })
        .then((data) => {
            renderGallery(data)
        })
        .catch((err) => {
        console.error("Error:", err);
    })
}


form.addEventListener("submit", onSubmit)

const APIKEY = "48409892-84416e27ee3da12ba614fc4d7";

export function fetchImages(query) {
    const options = {
        key: APIKEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };

    const params = new URLSearchParams(options).toString();
    const url = `https://pixabay.com/api/?${params}`;

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}

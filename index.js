import{i as l,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m="48409892-84416e27ee3da12ba614fc4d7";function p(o){const t={key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0},s=`https://pixabay.com/api/?${new URLSearchParams(t).toString()}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const d=document.querySelector(".gallery"),h=o=>{const{hits:t}=o;return t.length===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",backgroundColor:"red",close:!1,progressBar:!1}),t.map(({webformatURL:n,largeImageURL:s,tags:e,likes:r,views:a,comments:u,downloads:g})=>`
            <div class="image-card">
                <a href="${s}" target="_blank">
                    <img src="${n}" alt="${e}" loading="lazy" />
                </a>
                <div class="image-info">
                    <p><strong>Likes</strong> ${r}</p>
                    <p><strong>Views</strong> ${a}</p>
                    <p><strong>Comments</strong> ${u}</p>
                    <p><strong>Downloads</strong> ${g}</p>
                </div>
            </div>`).join("")},y=o=>{const t=h(o);d.innerHTML=t},i=document.querySelector("form"),c=document.querySelector(".gallery");function b(){i.addEventListener("submit",o=>{o.preventDefault();const n=new FormData(o.target).get("search-input");if(!n){l.show({message:"Input is empty!",messageColor:"white",position:"topRight",backgroundColor:"red",close:!1,progressBar:!1});return}i.reset(),c.innerHTML='<span class="loader"></span>',p(n).then(s=>{y(s),L()}).catch(s=>{console.error("Error:",s),c.innerHTML=""})})}function L(){new f(".gallery a",{captionDelay:250}).refresh()}b();
//# sourceMappingURL=index.js.map

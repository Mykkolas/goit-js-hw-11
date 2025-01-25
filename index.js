import{i as l,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="48409892-84416e27ee3da12ba614fc4d7";function m(o){const r={key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0},s=`https://pixabay.com/api/?${new URLSearchParams(r).toString()}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const d=document.querySelector(".gallery"),h=o=>{const{hits:r}=o;return r.length===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",backgroundColor:"red",close:!1,progressBar:!1}),r.map(({webformatURL:n,largeImageURL:s,tags:e,likes:t,views:a,comments:u,downloads:g})=>`
            <div class="image-card">
                <a href="${s}" target="_blank">
                    <img src="${n}" alt="${e}" loading="lazy" />
                </a>
                <div class="image-info">
                    <p><strong>Likes</strong> ${t}</p>
                    <p><strong>Views</strong> ${a}</p>
                    <p><strong>Comments</strong> ${u}</p>
                    <p><strong>Downloads</strong> ${g}</p>
                </div>
            </div>`).join("")},y=o=>{const r=h(o);d.innerHTML=r},i=document.querySelector("form"),c=document.querySelector(".gallery");function b(){i.addEventListener("submit",o=>{o.preventDefault();const n=new FormData(o.target).get("search-input");if(!n){l.show({message:"Input is empty!",messageColor:"white",position:"topRight",backgroundColor:"red",close:!1,progressBar:!1});return}i.reset(),c.innerHTML='<span class="loader"></span>',m(n).then(s=>{y(s),L()}).catch(s=>{console.error("Error:",s),c.innerHTML=""})})}function L(){new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}b();
//# sourceMappingURL=index.js.map

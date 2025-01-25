import{S as p,i}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=document.querySelector(".gallery"),m=o=>{const{hits:t}=o;return t.length===0?(i.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",backgroundColor:"red",close:!1,progressBar:!1}),""):t.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:n,comments:l,downloads:u})=>`
                <div class="image-card">
            <a href="${a}" target="_blank">
                <img src="${s}" alt="${e}" loading="lazy" />
            </a>
            <div class="image-info">
                <p>Likes ${r}</p>
                <p>Views ${n}</p>
                <p>Comments ${l}</p>
                <p>Downloads ${u}</p>
            </div>
        </div>`).join("")},d=o=>{const t=m(o);f.innerHTML=t,new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()},g=document.querySelector(".gallery"),h="48409892-84416e27ee3da12ba614fc4d7",c=document.querySelector("form");function y(o){o.preventDefault();const s=new FormData(o.target).get("search-input");if(!s){i.show({message:"Input is empty!",messageColor:"white",position:"topRight",backgroundColor:"red",close:!1,progressBar:!1});return}c.reset(),b(s)}function b(o){const t={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0},a=`https://pixabay.com/api/?${new URLSearchParams(t).toString()}`;return g.innerHTML='<span class="loader"></span>',fetch(a).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{d(e)}).catch(e=>{console.error("Error:",e)})}c.addEventListener("submit",y);
//# sourceMappingURL=index.js.map

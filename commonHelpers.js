import{a as A,S as q,i as u}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function g(r,t){return(await A.get("https://pixabay.com/api",{params:{key:"44309654-823a8ee5bf9a3cfe17e257280",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const x=document.querySelector(".gallery");function f(r){const t=r.map(({largeImageURL:s,webformatURL:l,tags:e,likes:o,views:a,comments:b,downloads:F})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}" target="_blank">
          <img class="gallery-image" 
               src="${l}" 
               alt="${e}" 
          />
        </a>
        <div class="image-details">
          <p class="text"><b>Likes</b> ${o}</p>
          <p class="text"><b>Views</b> ${a}</p>
          <p class="text"><b>Comments</b> ${b}</p>
          <p class="text"><b>Downloads</b> ${F}</p>
        </div>
      </li>
    `).join("");x.insertAdjacentHTML("beforeend",t)}const d=document.querySelector(".form"),m=document.querySelector(".loader-js"),y=document.querySelector(".gallery"),c=document.querySelector(".load-more-btn-js"),p=document.querySelector(".loader-more-js"),h=new q(".gallery a",{captionDelay:250,captionsData:"alt"});let i=1,n;d.addEventListener("submit",async r=>{if(r.preventDefault(),n=d.elements.input.value.trim(),!n){u.error({message:"Before executing the request, please enter its title!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconColor:"#FAFAFB",position:"topRight",timeout:3e3,theme:"dark",maxWidth:450});return}m.style.display="block";try{const t=await g(n);y.innerHTML="",i=1,t&&t.hits.length===0?(u.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconColor:"#FAFAFB",position:"topRight",timeout:3e3,theme:"dark",maxWidth:450}),y.innerHTML="",c.style.display="none"):(f(t.hits),h.refresh(),c.style.display="block")}catch(t){console.log(t)}finally{m.style.display="none",d.reset()}});c.addEventListener("click",async r=>{i+=1,p.style.display="block";try{const t=await g(n,i);f(t.hits),h.refresh(),p.style.display="none";const s=document.querySelectorAll(".gallery-item"),e=s[s.length-1].getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),t.totalHits<=i*15&&(c.style.display="none",u.info({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FAFAFB",backgroundColor:"#8A2BE2",iconColor:"#FAFAFB",position:"topRight",timeout:3e3,theme:"dark",maxWidth:450}))}catch(t){console.log(t)}});
//# sourceMappingURL=commonHelpers.js.map

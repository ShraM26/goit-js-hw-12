
const galleryElm = document.querySelector('.gallery');

export function imgTemplate(imgs) {
  
  const galleryMarkup = imgs.map(({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}" target="_blank">
          <img class="gallery-image" 
               src="${webformatURL}" 
               alt="${tags}" 
          />
        </a>
        <div class="image-details">
          <p class="text"><b>Likes</b> ${likes}</p>
          <p class="text"><b>Views</b> ${views}</p>
          <p class="text"><b>Comments</b> ${comments}</p>
          <p class="text"><b>Downloads</b> ${downloads}</p>
        </div>
      </li>
    `;
  }).join('');
  galleryElm.insertAdjacentHTML('beforeend', galleryMarkup);
}
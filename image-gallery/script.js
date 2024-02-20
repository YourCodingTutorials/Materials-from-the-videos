const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentImageIndex = 0;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = item.querySelector('img').src;
        captionText.innerHTML = item.getAttribute('data-title');
        currentImageIndex = index;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    modalImg.src = galleryItems[currentImageIndex].querySelector('img').src;
    captionText.innerHTML = galleryItems[currentImageIndex].getAttribute('data-title');
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1 + galleryItems.length) % galleryItems.length;
    modalImg.src = galleryItems[currentImageIndex].querySelector('img').src;
    captionText.innerHTML = galleryItems[currentImageIndex].getAttribute('data-title');
});

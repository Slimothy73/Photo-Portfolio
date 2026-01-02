const modal = document.getElementById('fullscreenModal');
const fullscreenImage = document.querySelector('.fullscreen-image');
const fullscreenDetails = document.querySelector('.fullscreen-details');
const closeBtn = document.querySelector('.close');
const photos = document.querySelectorAll('.main-photo');

photos.forEach(photo => {
    photo.addEventListener('click', function() {
        modal.style.display = 'flex';
        fullscreenImage.src = this.src;
        
        // Get the details from the photo card
        const photoCard = this.closest('.highlighted-photo-card') || this.closest('.photo-card');
        const details = photoCard.querySelector('.photo-details');
        if (details) {
            fullscreenDetails.innerHTML = details.innerHTML;
        }
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        modal.style.display = 'none';
    }
});

// Get all filter buttons and gallery items
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Event listener for filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        filterGallery(filter);
    });
});

// Function to filter the gallery based on the selected category
function filterGallery(filter) {
    galleryItems.forEach(item => {
        if (filter === 'all') {
            item.style.display = 'block';
        } else if (item.classList.contains(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

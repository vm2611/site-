const hoverContainers = document.querySelectorAll('.hover-container');

hoverContainers.forEach(container => {
    const image = container.querySelector('.hover-image');
    const text = container.querySelector('.hover-text-content');

    container.addEventListener('mouseenter', () => {
        image.style.opacity = '0'; // Hide the image
        text.style.display = 'block'; // Show the text
    });

    container.addEventListener('mouseleave', () => {
        image.style.opacity = '1'; // Show the image again
        text.style.display = 'none'; // Hide the text
    });
});

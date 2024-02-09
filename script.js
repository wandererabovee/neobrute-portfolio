window.addEventListener('DOMContentLoaded', () => {
    const emailMeSection = document.querySelector('.emailme');
    const iconsContainer = document.querySelector('.icons');
    const emailMeSectionHeight = emailMeSection.offsetHeight; // Get the height of the emailme section
    
    // Set the height of the icons container to match the height of the emailme section
    iconsContainer.style.height = `${emailMeSectionHeight}px`;
});

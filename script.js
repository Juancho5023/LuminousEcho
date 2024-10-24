// Handle character hover/click descriptions
const characters = document.querySelectorAll('.character');
const description = document.getElementById('description');

characters.forEach(character => {
    character.addEventListener('mouseover', () => {
        description.textContent = character.getAttribute('data-description');
    });

    character.addEventListener('mouseout', () => {
        description.textContent = '';
    });

    character.addEventListener('click', () => {
        description.textContent = character.getAttribute('data-description');
    });
});

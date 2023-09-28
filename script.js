const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar que el navegador siga el enlace
        const targetSectionId = link.getAttribute('href').substring(1);
        
        sections.forEach(section => {
            if (section.id === targetSectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const targetSection = document.querySelector(this.hash);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Change header background on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = "#0d1117";
        header.style.boxShadow = "0 2px 10px rgba(0, 255, 255, 0.2)";
    } else {
        header.style.background = "#161b22";
        header.style.boxShadow = "none";
    }
});

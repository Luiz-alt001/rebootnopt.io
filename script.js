document.addEventListener('DOMContentLoaded', () => {
    
    const nav = document.querySelector('nav');
    
    // Efeito de Scroll na Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            nav.style.borderBottom = '1px solid rgba(250, 204, 21, 0.2)';
            nav.style.padding = '15px 40px';
        } else {
            nav.style.backgroundColor = 'transparent';
            nav.style.borderBottom = '1px solid transparent';
            nav.style.padding = '24px 40px';
        }
    });

    // Animação de entrada dos textos do Hero
    const elements = document.querySelectorAll('h1, p, span, div');
    elements.forEach((el) => {
        el.classList.add('hero-reveal');
    });

});
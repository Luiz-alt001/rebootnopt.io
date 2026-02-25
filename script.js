document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicializar AOS (Animações de Scroll)
    AOS.init({ 
        duration: 1000, 
        once: true,
        offset: 100
    });

    // 2. Comportamento da Navbar ao rolar
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 3. Log de Boas-vindas (DevTools)
    console.log("%cNO PORTUGUESE IDIOMAS", "color: #facc15; font-size: 20px; font-weight: bold;");
    console.log("Seja bem-vindo ao site oficial. Be Real.");

    // 4. Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
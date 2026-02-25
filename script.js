/**
 * NO PORTUGUESE - Core Interactions (Parte 1)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito da Navbar ao Rolar
    // Quando o utilizador desce 50px, a navbar ganha um fundo sólido e reduz o tamanho
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.paddingTop = '15px';
            nav.style.paddingBottom = '15px';
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            nav.classList.add('shadow-xl');
        } else {
            nav.style.paddingTop = '24px';
            nav.style.paddingBottom = '24px';
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            nav.classList.remove('shadow-xl');
        }
    });

    // 2. Revelação Suave dos Elementos (Fade-In)
    // Criamos uma pequena animação de entrada para o título e subtítulo
    const heroElements = document.querySelectorAll('section > div > *');
    
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        
        // Pequeno delay para começar a animação
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });

    // 3. Efeito de Interação no Botão Principal
    const mainBtn = document.querySelector('.bg-white');
    if (mainBtn) {
        mainBtn.addEventListener('mouseenter', () => {
            console.log("User demonstrando interesse no início da jornada.");
        });
    }

    // 4. Smooth Scroll para links internos (quando adicionarmos as outras partes)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
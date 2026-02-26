/**
 * NO PORTUGUESE - Script Principal
 * Desenvolvido para: Paulini Medeiros
 * Funcionalidades: AOS, Navbar Dinâmica, Smooth Scroll e Tracking
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicializar AOS (Animações de Scroll)
    // Faz os elementos surgirem com fade e movimento ao descer a página
    AOS.init({ 
        duration: 1000, 
        once: true,
        offset: 100,
        disable: window.innerWidth < 768 // Desativa em telas pequenas para melhor performance
    });

    // 2. Comportamento da Navbar ao rolar
    // Adiciona fundo preto, blur e borda quando o usuário sai do topo
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 3. Smooth Scroll (Rolagem Suave) com compensação de Navbar
    // Garante que ao clicar no menu, a seção não fique "escondida" atrás da nav fixa
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Verifica se o link é apenas "#" ou se o alvo existe
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const navHeight = nav.offsetHeight;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Efeito de Hover Dinâmico nos Planos (Console Tracking)
    // Monitora qual plano o usuário está explorando
    const planCards = document.querySelectorAll('#planos .max-w-7xl > div');
    planCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const planoTitle = card.querySelector('h4');
            if (planoTitle) {
                const nomePlano = planoTitle.innerText;
                console.log(`%c[Interesse]: Visualizando ${nomePlano}`, "color: #facc15; font-weight: bold;");
            }
        });
    });

    // 5. Log de Boas-vindas Personalizado
    console.log("%cNO PORTUGUESE IDIOMAS", "color: #facc15; font-size: 24px; font-weight: bold; text-shadow: 2px 2px #000;");
    console.log("%cBe Real. Say No Portuguese.", "color: #fff; font-style: italic;");
    console.log("Status: Sistema de imersão Paulini Medeiros ativo.");

});
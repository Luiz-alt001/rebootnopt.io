document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicializar AOS (Animações de Scroll)
    // Responsável por fazer os elementos surgirem suavemente ao descer a página
    AOS.init({ 
        duration: 1000, 
        once: true,
        offset: 100,
        disable: 'mobile' // Opcional: desativa em celulares muito antigos para performance
    });

    // 2. Comportamento da Navbar ao rolar
    // Adiciona o fundo preto e blur quando o usuário sai do topo
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 3. Smooth Scroll (Rolagem Suave)
    // Faz a transição suave entre as seções (Método, História, Planos)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Compensação da altura da navbar fixa
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

    // 4. Efeito de Hover Dinâmico nos Planos
    // Dá um feedback visual no console (útil para trackear interesse futuramente)
    const cards = document.querySelectorAll('#planos > div > div');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const plano = card.querySelector('h4').innerText;
            console.log(`%c[Interesse]: Visualizando plano ${plano}`, "color: #facc15");
        });
    });

    // 5. Log de Boas-vindas Personalizado
    console.log("%cNO PORTUGUESE IDIOMAS", "color: #facc15; font-size: 24px; font-weight: bold; text-shadow: 2px 2px #000;");
    console.log("%cBe Real. Say No Portuguese.", "color: #fff; font-style: italic;");
    console.log("Status: Sistema de imersão Paulini Medeiros ativo.");

});
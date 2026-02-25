/**
 * NO PORTUGUESE - Premium Interaction Script
 * Funções: Smooth Scroll, CountUp, Floating WhatsApp e Dynamic Navbar
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de Navbar ao Rolar
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('py-3', 'shadow-2xl');
            nav.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            nav.classList.remove('py-3', 'shadow-2xl');
            nav.style.background = 'rgba(255, 255, 255, 0.03)';
        }
    });

    // 2. Contador de Aulas (Efeito CountUp)
    const observeNumbers = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseInt(target.innerText);
                let startValue = 0;
                let duration = 2000; // 2 segundos
                let step = endValue / (duration / 10);
                
                const timer = setInterval(() => {
                    startValue += step;
                    if (startValue >= endValue) {
                        target.innerText = endValue;
                        clearInterval(timer);
                    } else {
                        target.innerText = Math.floor(startValue);
                    }
                }, 10);
                observeNumbers.unobserve(target);
            }
        });
    }, { threshold: 1 });

    // Aplicar o observador nos números de impacto (70 aulas / 0% português)
    document.querySelectorAll('.font-900').forEach(num => {
        if (!num.innerText.includes('%')) observeNumbers.observe(num);
    });

    // 3. Redirecionamento Inteligente para WhatsApp
    const buttons = document.querySelectorAll('a[href="#"], button');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const isSelectBtn = btn.innerText.toLowerCase().includes('selecionar') || 
                               btn.innerText.toLowerCase().includes('matrícula') ||
                               btn.innerText.toLowerCase().includes('começar');

            if (isSelectBtn) {
                e.preventDefault();
                
                // Identifica qual plano o usuário clicou para mandar a mensagem certa
                let plano = "Interesse Geral";
                const card = btn.closest('.card-vip');
                if (card) {
                    plano = card.querySelector('h4').innerText;
                }

                const mensagem = encodeURIComponent(`Olá! Gostaria de saber mais sobre o método No Portuguese e o plano ${plano}. Pode me ajudar?`);
                const fone = "5522981259080";
                
                window.open(`https://wa.me/${fone}?text=${mensagem}`, '_blank');
            }
        });
    });

    // 4. Efeito de Digitação no Subtítulo (Opcional - dá um charme "tech")
    const heroText = document.querySelector('.hero-subtitle'); // Adicione esta classe no seu P do hero se quiser
    if(heroText) {
        const content = heroText.innerHTML;
        heroText.innerHTML = '';
        let i = 0;
        function typeWriter() {
            if (i < content.length) {
                heroText.innerHTML += content.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        }
        typeWriter();
    }

    // 5. Log de boas-vindas para curiosos (DevTools)
    console.log("%cNO PORTUGUESE IDIOMAS", "color: #bf953f; font-size: 30px; font-weight: bold;");
    console.log("Bem-vindo ao futuro do bilinguismo. Método fundado por Paulini Medeiros.");
});
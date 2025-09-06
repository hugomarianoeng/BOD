// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const testBtn = document.getElementById('testBtn');
    const message = document.getElementById('message');
    const deployDate = document.getElementById('deployDate');
    
    // Define a data atual do deploy
    const currentDate = new Date().toLocaleString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    deployDate.textContent = currentDate;
    
    // Função para mostrar mensagem
    function showMessage(text, type = 'success') {
        message.textContent = text;
        message.className = `message show ${type}`;
        
        // Remove a mensagem após 3 segundos
        setTimeout(() => {
            message.className = 'message hidden';
        }, 3000);
    }
    
    // Event listener para o botão de teste
    testBtn.addEventListener('click', function() {
        // Simula um teste de funcionalidade
        testBtn.textContent = 'Testando...';
        testBtn.disabled = true;
        
        // Simula um delay de processamento
        setTimeout(() => {
            const messages = [
                '✅ Teste realizado com sucesso!',
                '🚀 Deploy funcionando perfeitamente!',
                '⚡ Site carregando rapidamente!',
                '🎉 Tudo funcionando como esperado!'
            ];
            
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            showMessage(randomMessage);
            
            testBtn.textContent = 'Testar Funcionalidade';
            testBtn.disabled = false;
        }, 1500);
    });
    
    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Efeito de parallax simples no scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Animação de entrada para os cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa os cards para animação
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Função para verificar status do site
    function checkSiteStatus() {
        const statusElement = document.querySelector('.status-success');
        if (statusElement) {
            // Simula verificação de status
            const isOnline = navigator.onLine;
            if (isOnline) {
                statusElement.textContent = '✅ Online';
                statusElement.className = 'status-success';
            } else {
                statusElement.textContent = '❌ Offline';
                statusElement.className = 'status-error';
            }
        }
    }
    
    // Verifica status inicial
    checkSiteStatus();
    
    // Verifica status quando a conexão muda
    window.addEventListener('online', checkSiteStatus);
    window.addEventListener('offline', checkSiteStatus);
    
    // Console log para debug
    console.log('🚀 Site de teste carregado com sucesso!');
    console.log('📅 Deploy realizado em:', currentDate);
    console.log('🌐 Plataforma: Umbler');
});
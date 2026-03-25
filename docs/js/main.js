/**
 *  Pizzaria Sophia
 * Controle de UI e UX
 */

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');

    // Efeito de Scroll no Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('py-2', 'shadow-2xl');
            header.style.backgroundColor = 'rgba(2, 48, 89, 0.98)';
        } else {
            header.classList.remove('py-2', 'shadow-2xl');
            header.style.backgroundColor = '#023059';
        }
    });

    // Log de Inicialização (Jarbas System)
    console.log(" Sophia System Online [v1.0.0]");
});
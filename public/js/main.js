/**
 * Jarbas - Pizzaria Sophia JS
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    handleMobileMenu();
});

// Muda o estilo do header ao rolar a página
function initHeaderScroll() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('shadow-xl', 'py-2');
            nav.style.backgroundColor = 'rgba(2, 48, 89, 0.95)';
        } else {
            nav.classList.remove('shadow-xl', 'py-2');
            nav.style.backgroundColor = '#023059';
        }
    });
}

// Menu Mobile (Simples e Direto)
function handleMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if(btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pizzaria-blue': '#023059',
        'pizzaria-orange': '#F27405',
      }
    },
  },
  plugins: [],
}
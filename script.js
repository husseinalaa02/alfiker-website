document.addEventListener('DOMContentLoaded', () => {

    // ─── Mobile Menu Toggle ───────────────────────────────────────────────────
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks   = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
        // Close menu when a nav link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }

    // ─── Scroll Fade-In Animation ─────────────────────────────────────────────
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // ─── Spotlight Effect (ibelick/spotlight equivalent in vanilla JS) ────────
    const hero      = document.getElementById('hero');
    const spotlight = document.getElementById('heroSpotlight');

    if (hero && spotlight) {
        let rafId = null;

        hero.addEventListener('mousemove', (e) => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const rect = hero.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                spotlight.style.setProperty('--sx', `${x}px`);
                spotlight.style.setProperty('--sy', `${y}px`);
            });
        });
    }

    // ─── Spline Loader: hide spinner once scene loads ─────────────────────────
    const splineViewer = document.getElementById('splineViewer');
    const splineLoader = document.getElementById('splineLoader');

    if (splineViewer && splineLoader) {
        // The spline-viewer web component fires 'load' when the scene is ready
        splineViewer.addEventListener('load', () => {
            splineLoader.classList.add('hidden');
        });

        // Fallback: hide loader after 8 seconds regardless
        setTimeout(() => {
            splineLoader.classList.add('hidden');
        }, 8000);
    }

});

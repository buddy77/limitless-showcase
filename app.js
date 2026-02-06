function showPage(pageId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        target.scrollTop = 0;
        window.scrollTo(0, 0);
    }
}

// Fade-in on scroll for elements with data-animate
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(
        // Page 1
        '.p1-feature-card, .p1-problem-left, .p1-problem-right, .p1-cta-content,' +
        '.p1-step, .p1-test-card-new, .p1-budget-inner,' +
        // Page 2
        '.p2-pillar, .p2-stat, .p2-test-card, .p2-manifesto-content,' +
        '.p2-budget-feat, .p2-budget-text,' +
        // Page 3
        '.p3-col, .p3-step, .p3-test-card, .p3-belief-right,' +
        '.p3-journey-point, .p3-budget-item'
    ).forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
});

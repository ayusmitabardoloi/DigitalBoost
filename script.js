document.addEventListener('DOMContentLoaded', () => {

    // Preloader
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('hidden');
        }
    });

    // Counters Animation
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                const duration = 1500;
                const step = 20;
                const inc = target / (duration / step);
                
                let count = 0;
                const update = () => {
                    count += inc;
                    if (count < target) {
                        entry.target.innerText = Math.ceil(count);
                        setTimeout(update, step);
                    } else {
                        entry.target.innerText = target + "+";
                    }
                };
                update();
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(c => observer.observe(c));

    // Form handling
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Sent Successfully!';
            btn.style.opacity = '0.8';
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.opacity = '1';
                form.reset();
            }, 3000);
        });
    }

    // Keyboard Accessibility for Bento Boxes
    // Allow users to tab through bento boxes if they have interactive content,
    // or just ensure links inside are perfectly focusable.
    const links = document.querySelectorAll('a, button, input');
    links.forEach(link => {
        link.addEventListener('focus', () => {
            // Find parent bento box and add subtle highlight class if needed
            const bento = link.closest('.bento-box');
            if (bento) {
                bento.style.transform = 'translateY(-4px)';
                bento.style.boxShadow = '0 12px 24px rgba(17, 24, 39, 0.05)';
            }
        });
        link.addEventListener('blur', () => {
            const bento = link.closest('.bento-box');
            if (bento) {
                bento.style.transform = '';
                bento.style.boxShadow = '';
            }
        });
    });
});

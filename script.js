    // <!-- Custom JavaScript -->
    
        document.addEventListener('DOMContentLoaded', () => {

            // --- 1. MOCK DATA & DYNAMIC CONTENT ---
            const bikesData = [
                { name: 'Royal Enfield Classic 350', engine: '349cc', mileage: '41 kmpl', price: '₹1,93,000', image: 'https://placehold.co/400x300/3498db/ffffff?text=Classic+350' },
                { name: 'TVS Apache RTR 160', engine: '160cc', mileage: '47 kmpl', price: '₹1,24,000', image: 'https://placehold.co/400x300/e74c3c/ffffff?text=Apache+160' },
                { name: 'Bajaj Pulsar N160', engine: '164cc', mileage: '59 kmpl', price: '₹1,32,000', image: 'https://placehold.co/400x300/2ecc71/ffffff?text=Pulsar+N160' },
                { name: 'Yamaha MT 15 V2', engine: '155cc', mileage: '48 kmpl', price: '₹1,68,000', image: 'https://placehold.co/400x300/f1c40f/000000?text=MT-15' },
                { name: 'Hero Splendor Plus', engine: '97cc', mileage: '80 kmpl', price: '₹75,441', image: 'https://placehold.co/400x300/9b59b6/ffffff?text=Splendor' },
                { name: 'KTM 200 Duke', engine: '199cc', mileage: '33 kmpl', price: '₹1,97,000', image: 'https://placehold.co/400x300/e67e22/ffffff?text=Duke+200' },
            ];

            const grid = document.getElementById('featured-bikes-grid');
            const template = document.getElementById('bike-card-template');

            bikesData.forEach(bike => {
                const cardClone = template.content.cloneNode(true);
                cardClone.querySelector('h3').textContent = bike.name;
                cardClone.querySelector('.spec-engine').textContent = bike.engine;
                cardClone.querySelector('.spec-mileage').textContent = bike.mileage;
                cardClone.querySelector('.bike-price').textContent = bike.price;
                cardClone.querySelector('img').src = bike.image;
                cardClone.querySelector('img').alt = bike.name;
                grid.appendChild(cardClone);
            });


            // --- 2. SWIPER INITIALIZATION ---
            const swiper = new Swiper('.featured-slider', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
            });


            // --- 3. ANIMATIONS WITH GSAP ---
            gsap.registerPlugin(ScrollTrigger);
            
            // Hero Section Animation
            gsap.from(".hero-title", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.2 });
            gsap.from(".hero-subtitle", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.4 });
            gsap.from(".search-bar", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.6 });

            // Scroll-triggered Animations
            // Category cards
            gsap.from(".category-card", {
                scrollTrigger: {
                    trigger: ".category-grid",
                    start: "top 80%",
                },
                duration: 0.8,
                y: 50,
                opacity: 0,
                stagger: 0.2,
                ease: "power3.out"
            });
            
            // Featured bikes section title
            gsap.from(".featured-bikes .section-title", {
                 scrollTrigger: {
                    trigger: ".featured-bikes",
                    start: "top 80%",
                },
                duration: 1,
                y: 50,
                opacity: 0,
                ease: "power3.out"
            });
            
            // Note: Swiper items animation can be tricky. We let swiper handle the view.
            // For non-slider grids, this would be the approach:
            // gsap.from(".bike-card", { ... });


            // --- 4. STICKY HEADER ---
            const header = document.getElementById('main-header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('sticky');
                } else {
                    header.classList.remove('sticky');
                }
            });
        });
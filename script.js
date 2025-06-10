    // <!-- Custom JavaScript -->
    
        document.addEventListener('DOMContentLoaded', () => {

            // --- 1. MOCK DATA & DYNAMIC CONTENT ---
          const bikesData = [
        { name: 'Royal Enfield Classic 350', brand: 'Royal Enfield', engine: '349cc', mileage: '41 kmpl', price: '₹1,93,000', image: 'https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/studio-shots/new/gun-grey.png' },
        { name: 'TVS Apache RTR 160', brand: 'TVS', engine: '160cc', mileage: '47 kmpl', price: '₹1,24,000', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/tvs-select-model-glossy-black-be-1718781206746.png?q=80' },
        { name: 'Bajaj Pulsar N160', brand: 'Bajaj', engine: '164cc', mileage: '59 kmpl', price: '₹1,32,000', image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/124645/pulsar-n160-right-front-three-quarter-8.jpeg?isig=0' },
        { name: 'Yamaha MT 15 V2', brand: 'Yamaha', engine: '155cc', mileage: '48 kmpl', price: '₹1,68,000', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/yamaha-select-model-metallic-black-2023-1680847548270.png?q=80' },
        { name: 'Hero Splendor Plus', brand: 'Hero', engine: '97cc', mileage: '80 kmpl', price: '₹75,441', image: 'https://images.jdmagicbox.com/quickquotes/images_main/hero-splendor-plus-xtec-bs6-petrol-tornado-grey-271805940-yzrff.png' },
        { name: 'KTM 200 Duke', brand: 'KTM', engine: '199cc', mileage: '33 kmpl', price: '₹1,97,000', image: 'https://www.motoproworks.com/cdn/shop/files/ktm-390Duke-pulse-orange_d588e37c-f863-4468-b06c-4adf0c47c508.jpg?v=1720008782' },

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


        const swiper = new Swiper('.featured-slider', {
    loop: true,
    autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false, // Keep autoplay after user interaction
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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


document.addEventListener('DOMContentLoaded', () => {
  const toggler = document.getElementById('navbar-toggler');
  const navLinks = document.getElementById('nav-links');

  toggler.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

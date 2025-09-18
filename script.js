// Preloader
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });

        // Back to Top Button
        const backToTopButton = document.querySelector('.back-to-top');
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        });

        // Hero Slider
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.slider-dot');
        let currentSlide = 0;

        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = (n + slides.length) % slides.length;
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        // Auto slide
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);

        // Gallery Slider
        const gallerySlider = document.querySelector('.gallery-slider');
        const galleryItems = document.querySelectorAll('.gallery-item');
        const galleryDots = document.querySelectorAll('.gallery-dot');
        const prevArrow = document.querySelector('.gallery-arrow.prev');
        const nextArrow = document.querySelector('.gallery-arrow.next');
        let currentGallerySlide = 0;
        const slideWidth = 300 + 30; // width + margin

        function moveGallerySlide(n) {
            galleryDots.forEach(dot => dot.classList.remove('active'));
            
            currentGallerySlide = (n + galleryDots.length) % galleryDots.length;
            
            gallerySlider.style.transform = `translateX(-${currentGallerySlide * slideWidth * 2}px)`;
            galleryDots[currentGallerySlide].classList.add('active');
        }

        galleryDots.forEach((dot, index) => {
            dot.addEventListener('click', () => moveGallerySlide(index));
        });

        prevArrow.addEventListener('click', () => moveGallerySlide(currentGallerySlide - 1));
        nextArrow.addEventListener('click', () => moveGallerySlide(currentGallerySlide + 1));

        // Initialize gallery
        moveGallerySlide(0);
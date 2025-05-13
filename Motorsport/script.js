document.addEventListener('DOMContentLoaded', () => {
            const image = document.querySelector('.scroll-image');
            const startPosition = window.innerWidth; // Ancho del dispositivo
            
            // Configuración inicial
            image.style.width = `${startPosition * 1.5}px`; // 1.5 veces el ancho del dispositivo
            
            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                const maxTranslation = -(image.offsetWidth - window.innerWidth);
                
                // Calcula la nueva posición
                let translateXValue = -scrollY * 0.5; // Ajusta el 0.5 para cambiar la velocidad
                
                // Limita el movimiento al ancho de la imagen
                translateXValue = Math.max(translateXValue, maxTranslation);
                translateXValue = Math.min(translateXValue, 0);
                
                image.style.transform = `translateX(${translateXValue}px)`;
            });

            // Ajustar en redimensionamiento
            window.addEventListener('resize', () => {
                image.style.width = `${window.innerWidth * 1.5}px`;
            });
        });
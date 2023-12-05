var widthScreen = window.innerWidth;
RevealIntem(widthScreen);

window.addEventListener('resize', function() {
    
    if(!isMobileDevice()) {
        location.reload();
    }
});

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function RevealIntem(screen) {
    var show = ScrollReveal({ reset: true });
    const DISTANCE = '50px';
    var origin;

    if(screen < 768) {
        origin = "left";
    } else {
        origin = "right";
    }

    show.reveal('.my-info-reveal', {
        duration: 1000,
        distance: DISTANCE,
        origin: 'left', 
        delay: 200
    });
    
    show.reveal('.my-image-reveal', {
        duration: 1000,
        distance: DISTANCE,
        origin: origin,
        delay: 400
    });
    
    show.reveal('.my-skill-reveal', {
        duration: 1000,
        distance: DISTANCE,
        delay: 600
    });
    
    show.reveal('.title-reveal', {
        duration: 1000,
        distance: DISTANCE,
        delay: 200
    });
    
    show.reveal('.skills-reveal', {
        duration: 1000,
        distance: DISTANCE,
        delay: 150
    });
    
    show.reveal('.project-left-reveal', {
        duration: 1000,
        distance: DISTANCE,
        origin: 'left',
        delay: 50
    });
    
    show.reveal('.project-right-reveal', {
        duration: 1000,
        distance: DISTANCE,
        origin: origin,
        delay: 150
    });
    
    show.reveal('.journey-left-reveal', {
        duration: 1000,
        distance: DISTANCE,
        origin: 'left',
        delay: 50
    });
    
    show.reveal('.journey-reveal', {
        duration: 1000,
        distance: DISTANCE,
        origin: origin,
        delay: 100
    });
    
    show.reveal('.footer-reveal', {
        duration: 1000,
        distance: '20px',
        delay: 150
    });

}

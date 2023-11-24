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
    var origin;

    if(screen < 768) {
        origin = "left";
    } else {
        origin = "right";
    }

    show.reveal('.my-info-reveal', {
        duration: 1000,
        distance: '10px',
        origin: 'left', 
        delay: 200
    });
    
    show.reveal('.my-image-reveal', {
        duration: 1000,
        distance: '10px',
        origin: origin,
        delay: 400
    });
    
    show.reveal('.my-skill-reveal', {
        duration: 1000,
        distance: '10px',
        delay: 600
    });
    
    show.reveal('.title-reveal', {
        duration: 1000,
        distance: '10px',
        delay: 800
    });
    
    show.reveal('.skills-reveal', {
        duration: 1000,
        distance: '10px',
        delay: 1000
    });
    
    show.reveal('.project-left-reveal', {
        duration: 1000,
        distance: '10px',
        origin: 'left',
        delay: 1200
    });
    
    show.reveal('.project-right-reveal', {
        duration: 1000,
        distance: '10px',
        origin: origin,
        delay: 1200
    });
    
    show.reveal('.certification-left-reveal', {
        duration: 1000,
        distance: '10px',
        origin: 'left',
        delay: 900
    });
    
    show.reveal('.certification-reveal', {
        duration: 1000,
        distance: '10px',
        origin: origin,
        delay: 1000
    });
    
    show.reveal('.footer-reveal', {
        duration: 1000,
        distance: '20px',
        delay: 1000
    });

}

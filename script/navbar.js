document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.navbar-nav a');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            navbarCollapse.classList.remove('show');

            var targetId = link.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            if (targetElement) {
                var offset = targetElement.offsetTop - document.querySelector('.navbar').offsetHeight;

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });

                event.preventDefault();
            }
        });
    });

    document.addEventListener('click', function (event) {
        if (!navbarCollapse.contains(event.target)) {
            navbarCollapse.classList.remove('show');
        }
    });
});
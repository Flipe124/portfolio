function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if(isMobileDevice) {
    var sections = document.querySelectorAll("section");

    for(i = 0;i < sections.length; i++) {
        sections[i].classList.add("mobile");
    }
}
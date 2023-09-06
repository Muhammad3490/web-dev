document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById("about-section")

    function checkScroll() {
        const triggerOffset = aboutSection.getBoundingClientRect().top + window.scrollY;
        const windowBottom = window.scrollY + window.innerHeight;

        if (triggerOffset < windowBottom) {
            aboutSection.classList.add("animated");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Check initial state
});
// mouse animation //


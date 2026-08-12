document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const menuBtn = document.getElementById("menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const menuOverlay = document.getElementById("menu-overlay");

    const homePage = document.getElementById("home-page");
    const commandsPage = document.getElementById("commands-page");

    const menuCommandsBtn = document.getElementById("menu-commands");
    const heroCommandsBtn = document.getElementById("hero-commands-btn");
    const backHomeBtn = document.getElementById("back-home-btn");

    // --- 1. SLIDE-OUT MENU TOGGLE ---
    function openMenu() {
        menuOverlay.classList.add("active");
    }

    function closeMenu() {
        menuOverlay.classList.remove("active");
    }

    menuBtn.addEventListener("click", openMenu);
    closeMenuBtn.addEventListener("click", closeMenu);

    // Close menu when clicking outside the content drawer
    menuOverlay.addEventListener("click", (e) => {
        if (e.target === menuOverlay) {
            closeMenu();
        }
    });

    // --- 2. PAGE NAVIGATION (HOME <-> COMMANDS) ---
    function showCommandsPage(e) {
        if (e) e.preventDefault();
        closeMenu();
        homePage.classList.remove("active");
        commandsPage.classList.add("active");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showHomePage(e) {
        if (e) e.preventDefault();
        commandsPage.classList.remove("active");
        homePage.classList.add("active");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Event Listeners for switching views
    menuCommandsBtn.addEventListener("click", showCommandsPage);
    heroCommandsBtn.addEventListener("click", showCommandsPage);
    backHomeBtn.addEventListener("click", showHomePage);
});

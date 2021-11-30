window.onload = function() {
    // set to default
    let currentTheme = localStorage.getItem("AUNISwikitheme") || "dark";

    setTheme("dark", currentTheme);

    const themeSelector = document.getElementById("theme-selector");

    // Add change event listener
    themeSelector.addEventListener("change", function(e) {
        // get the user's choice from the event object 'e'.
        const newTheme = e.currentTarget.value;

        // Set the theme
        setTheme(currentTheme, newTheme);
    });

    function setTheme(oldTheme, newTheme) {
        const body = document.getElementsByTagName("body")[0];

        // Remove old theme scope from body's class list
        body.classList.remove(oldTheme);

        // Add ne theme scope to body's class list
        body.classList.add(newTheme);

        // Set it as current theme
        currentTheme = newTheme;

        // Store the new theme in local storage
        localStorage.setItem("AUNISwikitheme", newTheme);
    }
};
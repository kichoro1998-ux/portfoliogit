const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkBtn.textContent = "Light Mode";
    } else {
        darkBtn.textContent = "Dark Mode";
    }
});

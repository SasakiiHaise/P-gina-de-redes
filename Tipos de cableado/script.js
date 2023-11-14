const listItems = document.querySelectorAll(".toggle-list-item");

listItems.forEach(item => {
    item.addEventListener("click", () => {
        const content = item.nextElementSibling;

        if (content.tagName === "DIV") {
            if (window.getComputedStyle(content).display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        }
    });
});






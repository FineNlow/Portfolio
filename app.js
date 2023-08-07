// button click active
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
        })
    });
})();

// typing effect
const text = document.querySelector(".sec-text")

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Thanabodee"
    }, 0);
    setTimeout(() => {
        text.textContent = "Developer"
    }, 4000);
    setTimeout(() => {
        text.textContent = "Student"
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);
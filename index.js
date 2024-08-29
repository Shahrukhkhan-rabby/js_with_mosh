document.querySelector(".work_button").addEventListener("mouseover", function () {
    this.style.backgroundColor = "#ffffff";
    this.style.color = "#000000";
});

document.querySelector("work_button").addEventListener("mouseout", function () {
    this.style.backgroundColor = "#1e1e1e";
    this.style.color = "#ffffff";
});
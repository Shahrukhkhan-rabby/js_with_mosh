document.querySelector(".work_button").addEventListener("mouseover", function () {
    this.style.backgroundColor = "#ffffff";
    this.style.color = "#000000";
});

document.querySelector("work_button").addEventListener("mouseout", function () {
    this.style.backgroundColor = "#1e1e1e";
    this.style.color = "#ffffff";
});
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display='flex'
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display='none'   
}


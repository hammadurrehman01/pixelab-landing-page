AOS.init()

$("#close-sidebar").click(function () {
    $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function () {
    $(".page-wrapper").addClass("toggled");
});

const showSidebar = document.querySelector("#show-sidebar");
const overlay = document.querySelector("#overlay");
const closeSidebar = document.querySelector("#close-sidebar");
const sidebar = document.querySelector(".sidebar-wrapper");

function showOverlay() {
    overlay.style.display = "block";
    sidebar.style.display = "block";
    document.querySelector('.sidebar')
        .classList.toggle('closed');
}

function hideOverlay() {
    overlay.style.display = "none"
    sidebar.style.display = "none"
    document.querySelector('.sidebar')
        .classList.toggle('closed');
}
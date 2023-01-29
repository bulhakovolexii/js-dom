const sidebar = document.querySelector('.sidebar__body');
const burgerBtn = document.querySelector('.burger-btn');
const sidebarBg = document.querySelector('.sidebar__bg');

burgerBtn.addEventListener('click', showSidebar);
sidebarBg.addEventListener('click', showSidebar)


function showSidebar() {
    sidebar.classList.toggle('visible');
    if (sidebar.classList.contains('visible')) {
        burgerBtn.classList.add('active');
        sidebarBg.classList.add('active');
    } else {
        burgerBtn.classList.remove('active');
        sidebarBg.classList.remove('active');
    }
}

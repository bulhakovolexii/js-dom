const sidebar = document.querySelector('.sidebar__body');
const body = document.querySelector('body');
const viewport = window.visualViewport;
const burgerBtn = document.querySelector('.burger-btn');
const sidebarBg = document.querySelector('.sidebar__bg');

viewport.addEventListener('resize', hideSidebar);
burgerBtn.addEventListener('click', showSidebar);
sidebarBg.addEventListener('click', showSidebar)

function hideSidebar() {
    if (viewport.width < 1200) {
        sidebar.classList.add('hidden');
        burgerBtn.classList.remove('active');
    } else {
        sidebar.classList.remove('hidden');
        burgerBtn.classList.add('active');
    }
}

function showSidebar() {
    sidebar.classList.toggle('hidden');
    if (sidebar.classList.contains('hidden')) {
        burgerBtn.classList.remove('active');
        sidebarBg.classList.remove('active');
    } else {
        burgerBtn.classList.add('active');
        sidebarBg.classList.add('active');
    }
}

hideSidebar();
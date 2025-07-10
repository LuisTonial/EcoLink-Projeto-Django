document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-sidebar-btn');
    const sidebar = document.getElementById('sidebar-menu'); 
    const mainContent = document.getElementById('main-content');

    function toggleSidebar() {
        sidebar.classList.toggle('aberta');
        mainContent.classList.toggle('com-sidebar');
    }

    sidebar.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    toggleButton.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleSidebar();
    });

    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', toggleSidebar);
    }
});

// Sidebar toggle for mobile
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });
}
// Hide sidebar when clicking outside on mobile
document.addEventListener('click', function(e) {
    if (window.innerWidth < 992 && sidebar.classList.contains('show')) {
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove('show');
        }
    }
});
// Tab switching for floating search box
document.querySelectorAll('.search-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const tabName = this.getAttribute('data-tab');
        document.querySelectorAll('.search-form-row.tab-pane').forEach(pane => {
            pane.style.display = 'none';
            pane.classList.remove('active');
        });
        const activePane = document.getElementById('tab-' + tabName);
        activePane.style.display = 'flex';
        activePane.classList.add('active');
    });
});

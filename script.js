// Sidebar toggle for all screen sizes
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const mainContent = document.querySelector('.main-content');

sidebarToggle.addEventListener('click', function() {
    if (window.innerWidth >= 992) {
        sidebar.classList.toggle('mini');
        mainContent.classList.toggle('sidebar-mini');
    } else {
        sidebar.classList.toggle('show');
    }
});
// Hide sidebar when clicking outside (all screen sizes)
document.addEventListener('click', function(e) {
    if (sidebar.classList.contains('show')) {
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

function setCardBackgrounds() {
  if (window.innerWidth <= 991.98) {
    document.querySelectorAll('.card[data-bg], .where-card[data-bg]').forEach(card => {
      card.style.backgroundImage = `url('${card.getAttribute('data-bg')}')`;
    });
  } else {
    document.querySelectorAll('.card[data-bg], .where-card[data-bg]').forEach(card => {
      card.style.backgroundImage = '';
    });
  }
}
window.addEventListener('resize', setCardBackgrounds);
window.addEventListener('DOMContentLoaded', setCardBackgrounds);



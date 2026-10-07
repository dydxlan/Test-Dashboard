// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    
    // Toggle sidebar collapse
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        
        // Update toggle button text
        if (sidebar.classList.contains('collapsed')) {
            sidebarToggle.textContent = '?';
        } else {
            sidebarToggle.textContent = '?';
        }
    });
    
    // Add icons to navigation links
    const navLinks = document.querySelectorAll('aside nav ul li a');
    const icons = ['?', '?', '?', '??', '??'];
    
    navLinks.forEach((link, index) => {
        const icon = document.createElement('span');
        icon.textContent = icons[index];
        icon.style.marginRight = '10px';
        link.insertBefore(icon, link.firstChild);
        
        const textSpan = document.createElement('span');
        textSpan.textContent = link.textContent.trim().substring(1);
        link.innerHTML = '';
        link.appendChild(icon);
        link.appendChild(textSpan);
    });
    
    // Animate cards on load
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

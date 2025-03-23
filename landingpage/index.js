// sidebar toggle functionality
document.getElementById('toggle-sidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('full-width');
    
    // hamburger icon which collapses the sidebar
    const icon = this.querySelector('i');
    if (sidebar.classList.contains('collapsed')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-expand');
    } else {
        icon.classList.remove('fa-expand');
        icon.classList.add('fa-bars');
    }
});

// category tab selection below the search bar
document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelector('.category-tab.active').classList.remove('active');
        this.classList.add('active');
    });
});

// sidebar menu item selection
document.querySelectorAll('.sidebar-menu li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.sidebar-menu li.active').classList.remove('active');
        this.classList.add('active');
    });
});

// clicking this button redirects to shopping cart
document.getElementById('cart-button').addEventListener('click', function() {
    alert('Redirecting to shopping cart...');
    window.location.href = 'shoppingcart.html';
});

// clicking this item in home page promps the alert to user -- doesnt pull data from server YET
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
        alert('Item added to cart!');
    });
});
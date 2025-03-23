// sidebar toggle functionality
document.getElementById('toggle-sidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('full-width');
    
    // change icon based on sidebar state
    const icon = this.querySelector('i');
    if (sidebar.classList.contains('collapsed')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-expand');
    } else {
        icon.classList.remove('fa-expand');
        icon.classList.add('fa-bars');
    }
});

// continue shopping button
document.querySelector('.continue-shopping').addEventListener('click', function() {
    window.location.href = 'index.html';
});


document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        const currentValue = parseInt(input.value);
        
        if (this.classList.contains('decrease')) {
            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        } else if (this.classList.contains('increase')) {
            const max = parseInt(input.getAttribute('max'));
            if (currentValue < max) {
                input.value = currentValue + 1;
            }
        }
        
        // update item total
        updateItemTotal(this.closest('.cart-item'));
    });
});

// update item total when quantity changes
document.querySelectorAll('.item-quantity input').forEach(input => {
    input.addEventListener('change', function() {
        updateItemTotal(this.closest('.cart-item'));
    });
});

// remove item button
document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.cart-item').remove();
        updateCartTotal();
    });
});

// update item total
function updateItemTotal(item) {
    const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
    const quantity = parseInt(item.querySelector('.item-quantity input').value);
    const total = (price * quantity).toFixed(2);
    
    item.querySelector('.item-total').textContent = '$' + total;
    updateCartTotal();
}

// update cart total
function updateCartTotal() {
    let subtotal = 0;
    
    document.querySelectorAll('.cart-item').forEach(item => {
        const itemTotal = parseFloat(item.querySelector('.item-total').textContent.replace('$', ''));
        subtotal += itemTotal;
    });
    
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    
    document.querySelector('.summary-row:nth-child(1) span:last-child').textContent = '$' + subtotal.toFixed(2);
    document.querySelector('.summary-row:nth-child(3) span:last-child').textContent = '$' + tax.toFixed(2);
    document.querySelector('.summary-row.total span:last-child').textContent = '$' + total.toFixed(2);
}
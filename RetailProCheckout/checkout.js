document.addEventListener('DOMContentLoaded', function() {
    // Demo cart data. In a real integration, retrieve these details from your shopping cart
    const cartSummary = {
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: 129.99 },
        { name: 'Smart Watch', quantity: 1, price: 199.99 },
        { name: 'Smartphone Case', quantity: 2, price: 24.99 },
        { name: 'Wireless Mouse', quantity: 1, price: 34.99 }
      ]
    };
  
    // Calculate totals
    let subtotal = 0;
    cartSummary.items.forEach(item => {
      subtotal += item.price * item.quantity;
    });
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
  
    // Populate Order Summary UI
    const summaryItemsDiv = document.getElementById('summary-items');
    cartSummary.items.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('summary-item');
      div.innerHTML = `<span>${item.name} x ${item.quantity}</span><span>$${(item.price * item.quantity).toFixed(2)}</span>`;
      summaryItemsDiv.appendChild(div);
    });
    document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('tax').textContent = '$' + tax.toFixed(2);
    document.getElementById('total').textContent = '$' + total.toFixed(2);
  
    // Handle payment form submission
    document.getElementById('payment-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Retrieve and trim form values
      const cardName = document.getElementById('card-name').value.trim();
      const cardNumber = document.getElementById('card-number').value.replace(/\s+/g, '');
      const expiry = document.getElementById('expiry').value.trim();
      const cvv = document.getElementById('cvv').value.trim();
      
      // Basic field validation
      if (!cardName || !cardNumber || !expiry || !cvv) {
        alert('Please fill in all payment fields.');
        return;
      }
      
      // Validate card number (digits only, 16 digits)
      if (!/^\d{16}$/.test(cardNumber)) {
        alert('Please enter a valid 16-digit card number.');
        return;
      }
      
      // Validate expiration date (MM/YY)
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        alert('Please enter a valid expiration date in MM/YY format.');
        return;
      }
      
      // Validate CVV (3 digits)
      if (!/^\d{3}$/.test(cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        return;
      }
      
      // Simulate successful payment processing
      alert('Payment successful! Your order has been placed.');
      
      // In a production system, you would send the payment details to your server here,
      // and also clear the shopping cart as needed.
    });
  });
  
// Main application JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Add your custom JavaScript here
});

// Cart functionality
function updateCartItem(key, quantity) {
  fetch('/cart/change.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: key,
      quantity: quantity
    })
  })
  .then(response => response.json())
  .then(cart => {
    window.location.reload();
  })
  .catch(error => console.error('Error:', error));
}

function removeCartItem(key) {
  updateCartItem(key, 0);
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
}); 
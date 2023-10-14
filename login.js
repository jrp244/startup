document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // You can implement actual authentication logic here
    // For simplicity, we'll just display a message
    displayMessage(`Welcome, ${username}!`);
  });
  
  function displayMessage(message) {
    const outputContent = document.getElementById('outputContent');
    outputContent.innerHTML = `<p>${message}</p>`;
  }
  
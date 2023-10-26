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

// Function to handle the demo login
document.getElementById('demoLoginButton').addEventListener('click', () => {
  // Simulate a demo login
  const demoUsername = 'demoUser';
  const demoPassword = 'demoPassword';

  // Check if the demo login credentials are correct
  if (
    document.getElementById('username').value === demoUsername &&
    document.getElementById('password').value === demoPassword
  ) {
    displayMessage('Demo Login Successful');
  } else {
    displayMessage('Demo Login Failed. Please use the correct credentials.');
  }
});

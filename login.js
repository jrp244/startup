// login.js

document.getElementById('loginForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const result = await response.json();
      displayMessage(`Welcome, user with ID ${result.id}!`);
      document.getElementById('loginForm').reset();
    } else {
      const result = await response.json();
      displayMessage(`Authentication failed: ${result.msg}`);
    }
  } catch (error) {
    console.error('Error during login:', error);
    displayMessage('An error occurred during login.');
  }
});

// Function to handle the demo login (similar to before)
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
    document.getElementById('loginForm').reset();
  } else {
    displayMessage('Demo Login Failed. Please use the correct credentials.');
  }
});

function displayMessage(message) {
  const outputContent = document.getElementById('outputContent');
  outputContent.innerHTML = `<p>${message}</p>`;
}

function addScore(name, wins, date) {
    const tbody = document.querySelector('#scoreTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${tbody.children.length + 1}</td><td>${name}</td><td>${wins}</td><td>${date}</td>`;
    tbody.appendChild(newRow);
  }
  
  function saveScore(name, wins, date) {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push({ name, wins, date });
    localStorage.setItem('scores', JSON.stringify(scores));
  }
  
  function loadScores() {
    const scores = JSON.parse(localStorage.getItem('scores'));
  
    // Check if there are saved scores, and if not, display default scores
    if (scores && scores.length > 0) {
      scores.forEach((score) => {
        addScore(score.name, score.wins, score.date);
      });
    } else {
      // Default scores
      addScore('Steven', 5, 'September 20, 2023');
      addScore('Jaren', 6, 'September 14, 2023');
      addScore('TacticalFluke', 3, 'August 30, 2023');
    }
  }

  // ... (previous code)

// Function to open a form for adding a new score
function openAddScoreForm() {
    const formHtml = `
      <tr>
        <td></td>
        <td><input type="text" id="newName" placeholder="Name"></td>
        <td><input type="number" id="newWins" placeholder="Wins"></td>
        <td><input type="text" id="newDate" placeholder="Date"></td>
        <td>
          <button id="saveNewScoreButton">Save</button>
          <button id="cancelNewScoreButton">Cancel</button>
        </td>
      </tr>
    `;
    const tbody = document.querySelector('#scoreTable tbody');
    tbody.insertAdjacentHTML('afterbegin', formHtml);
  
    // Add event listeners for the new score form
    const saveNewScoreButton = document.getElementById('saveNewScoreButton');
    saveNewScoreButton.addEventListener('click', () => {
      const name = document.getElementById('newName').value;
      const wins = document.getElementById('newWins').value;
      const date = document.getElementById('newDate').value;
      addScore(name, wins, date);
      saveScore(name, wins, date);
      clearAddScoreForm();
    });
  
    const cancelNewScoreButton = document.getElementById('cancelNewScoreButton');
    cancelNewScoreButton.addEventListener('click', () => {
      clearAddScoreForm();
    });
  }
  
  // Function to clear the new score form
  function clearAddScoreForm() {
    const tbody = document.querySelector('#scoreTable tbody');
    tbody.firstElementChild.remove();
  }
  
  // Function to open a form for editing a score
  function openEditScoreForm(row) {
    const cells = row.cells;
    const name = cells[1].textContent;
    const wins = cells[2].textContent;
    const date = cells[3].textContent;
  
    const editFormHtml = `
      <td></td>
      <td><input type="text" id="editName" value="${name}"></td>
      <td><input type="number" id="editWins" value="${wins}"></td>
      <td><input type="text" id="editDate" value="${date}"></td>
      <td>
        <button id="saveEditedScoreButton">Save</button>
        <button id="cancelEditedScoreButton">Cancel</button>
      </td>
    `;
  
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerHTML = editFormHtml;
    }
  
    const saveEditedScoreButton = document.getElementById('saveEditedScoreButton');
    saveEditedScoreButton.addEventListener('click', () => {
      const newName = document.getElementById('editName').value;
      const newWins = document.getElementById('editWins').value;
      const newDate = document.getElementById('editDate').value;
  
      // Update the displayed data
      cells[1].textContent = newName;
      cells[2].textContent = newWins;
      cells[3].textContent = newDate;
  
      // Save the changes
      const index = row.rowIndex - 1; // Subtract 1 to account for table header
      updateSavedScore(index, newName, newWins, newDate);
    });
  
    const cancelEditedScoreButton = document.getElementById('cancelEditedScoreButton');
    cancelEditedScoreButton.addEventListener('click', () => {
      // Restore the original data
      cells[1].textContent = name;
      cells[2].textContent = wins;
      cells[3].textContent = date;
    });
  }
  
  // Function to update saved scores
  function updateSavedScore(index, newName, newWins, newDate) {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores[index] = { name: newName, wins: newWins, date: newDate };
    localStorage.setItem('scores', JSON.stringify(scores));
  }
  
  // Add event listeners for the buttons
  document.getElementById('addScoreButton').addEventListener('click', openAddScoreForm);
  document.getElementById('editScoresButton').addEventListener('click', () => {
    const rows = document.querySelectorAll('#scoreTable tbody tr');
    rows.forEach((row) => {
      row.cells[4].innerHTML = `
        <button id="editScoreButton">Edit</button>
      `;
      const editScoreButton = document.getElementById('editScoreButton');
      editScoreButton.addEventListener('click', () => {
        openEditScoreForm(row);
      });
    });
  });
  // Function to delete all scores
function deleteScores() {
    localStorage.removeItem('scores');
    const tbody = document.querySelector('#scoreTable tbody');
    tbody.innerHTML = ''; // Clear the displayed scores
  }
  
  // Add event listener for the "Delete Scores" button
  document.getElementById('deleteScoresButton').addEventListener('click', () => {
    if (confirm('Are you sure you want to delete all scores?')) {
      deleteScores();
    }
  });

  // Function to clear displayed scores
function clearDisplayedScores() {
    const tbody = document.querySelector('#scoreTable tbody');
    tbody.innerHTML = '';
  }
  
  // Add event listener for the "Clear Scores" button
  document.getElementById('clearScoresButton').addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all scores from the display?')) {
      clearDisplayedScores();
    }
  });
  
  // Load scores
  loadScores();
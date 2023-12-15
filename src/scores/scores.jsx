import React, { useState, useEffect } from 'react';
import './scores.css';

const Scores = () => {
  const [scores, setScores] = useState([]); // Array of score objects
  const [showAddScoreForm, setShowAddScoreForm] = useState(false); // Flag for add score form display

  // Function to save score to localStorage (adapt based on your implementation)
  const saveScoreToLocalStorage = (score) => {
    const savedScores = JSON.parse(localStorage.getItem('scores')) || [];
    savedScores.push(score);
    localStorage.setItem('scores', JSON.stringify(savedScores));
  };

  // Function to add a new score
  const handleAddScore = (name, wins, date) => {
    const newScore = { name, wins, date };
    setScores([...scores, newScore]);
    saveScoreToLocalStorage(newScore);
    setShowAddScoreForm(false);
  };

  // Function to open a form for adding a new score
  const openAddScoreForm = () => setShowAddScoreForm(true);

  // Function to clear the new score form
  const clearAddScoreForm = () => setShowAddScoreForm(false);

  // Function to open a form for editing a score
  const openEditScoreForm = (row) => {
    const { cells } = row;
    const [name, wins, date] = cells.slice(1).map((cell) => cell.textContent);
    setShowAddScoreForm(true); // Reuse form for editing
    setScores((prevState) => {
      const updatedScores = [...prevState];
      const index = row.rowIndex - 1; // Account for header row
      updatedScores[index] = { name, wins, date };
      return updatedScores;
    });
  };

  // Function to update saved score data
  const updateSavedScore = (index, newName, newWins, newDate) => {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores[index] = { name: newName, wins: newWins, date: newDate };
    localStorage.setItem('scores', JSON.stringify(scores));
  };

  // Function to handle saving edited score
  const handleSaveEditedScore = () => {
    const { cells } = document.getElementById('scoreTable').querySelector('tbody tr:first-child'); // Access edited row
    const [newName, newWins, newDate] = cells.slice(1).map((cell) => cell.value);
    const index = scores.findIndex((score) => score.name === newName); // Find edited score index
    setScores((prevState) => {
      const updatedScores = [...prevState];
      updatedScores[index] = { name: newName, wins: newWins, date: newDate };
      return updatedScores;
    });
    updateSavedScore(index, newName, newWins, newDate);
    setShowAddScoreForm(false); // Close form after saving
  };

  // Function to handle canceling edit
  const handleCancelEditScore = () => {
    const scoresCopy = [...scores]; // Create copy to avoid mutating state directly
    const editedRow = scoresCopy.pop(); // Remove temporary edited score
    setScores(scoresCopy);
    setShowAddScoreForm(false); // Close form
  };

  // Load scores from localStorage on mount
  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem('scores')) || [];
    setScores(savedScores);
  }, []);

  // Handle delete all scores
  const handleDeleteScores = () => {
    if (window.confirm('Are you sure you want to delete all scores?')) {
      setScores([]);
      localStorage.removeItem('scores');
    }
  };

  // Handle clear displayed scores
  const handleClearDisplayedScores = () => {
    if (window.confirm('Clear all scores from the display?')) {
      setScores([]);
    }
  };

  // ... remaining code from previous version ...

  return (
    <div className={styles.scoresPage}>
      <button onClick={handleAddScore} className={styles.addScoreButton}>
        Add Score
      </button>
      <button onClick={handleEditScores} className={styles.editScoresButton}>
        Edit Scores
      </button>
      <button onClick={handleDeleteScores} className={styles.deleteScoresButton}>
        Delete Scores
      </button>
      <button onClick={handleClearDisplayedScores} className={styles.clearScoresButton}>
        Clear Scores
      </button>

      <table id="scoreTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{score.name}</td>
              <td>{score.wins}</td>
              <td>{score.date}</td>
              {/* Add edit button conditionally */}
              {/* Implement edit form based on handleEditScore and handleCancelEditScore */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render add score form conditionally based on showAddScoreForm */}
      {/* Implement add score form with input fields and handleSaveScore and handleCloseAddScoreForm */}

    </div>
  );
};
export default Scores;
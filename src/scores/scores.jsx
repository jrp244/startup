import React, { useState } from 'react';

import './scores.css';

export function Scores() {
  const [scores, setScores] = useState([]);
  let imgEl = <img src='https://static.wikia.nocookie.net/shiny-pokemon/images/c/c2/Shiny_ninetales_global_link_art_by_trainerparshen-d6t9mue.png/revision/latest?cb=20170523175452' alt='stock background' />;

  // Fetch and store scores
  React.useEffect(() => {
    fetch('/api/scores')
      .then((response) => response.json())
      .then((scores) => {
        setScores(scores);
        localStorage.setItem('scores', JSON.stringify(scores));
      })
      .catch(() => {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
          setScores(JSON.parse(scoresText));
        }
      });
  }, []);

  // Define state for user inputs
  const [newScoreName, setNewScoreName] = useState('');
  const [newScoreValue, setNewScoreValue] = useState(0);

  // Handle score submission
  const handleSubmitScore = () => {
    if (!newScoreName || !newScoreValue) return; // Basic validation

    const newScore = {
      name: newScoreName,
      score: newScoreValue,
      date: new Date().toISOString(),
    };

    // Update scores (replace this with your actual API call/storage logic)
    setScores([...scores, newScore]);

    // Reset input fields
    setNewScoreName('');
    setNewScoreValue(0);
  };

  // Generate score rows
  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div id='picture' className='picture-box'>
          {imgEl}
        </div>
      <table className='table table-warning table-striped-columns'>
        <thead className='table-dark'>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {scoreRows}
          <tr>
            <td>&nbsp;</td>
            <td>
              <input
                type="text"
                placeholder="Enter Name"
                value={newScoreName}
                onChange={(e) => setNewScoreName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder="Enter Score"
                value={newScoreValue}
                onChange={(e) => setNewScoreValue(parseInt(e.target.value))}
              />
            </td>
            <td>
              <input type="date" disabled />
            </td>
            <td>
              <button onClick={handleSubmitScore}>Submit Score</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

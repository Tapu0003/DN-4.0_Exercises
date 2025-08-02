import React from 'react';

const IndianPlayers = () => {
  const T20 = ['Sachin1', 'Virat3', 'Yuvaraj5'];
  const Ranji = ['Dhoni2', 'Rohit4', 'Raina6'];

  // Merge arrays
  const allPlayers = [...T20, ...Ranji];

  // Separate even/odd based on position
  const oddPlayers = allPlayers.filter((_, index) => index % 2 === 0);   // 0,2,4
  const evenPlayers = allPlayers.filter((_, index) => index % 2 !== 0);  // 1,3,5

  // Labels for positions
  const positionLabels = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"];

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        {oddPlayers.map((name, idx) => (
          <li key={idx}>{positionLabels[idx * 2]} : {name}</li>
        ))}
      </ul>

      <hr />

      <h2>Even Players</h2>
      <ul>
        {evenPlayers.map((name, idx) => (
          <li key={idx}>{positionLabels[idx * 2 + 1]} : {name}</li>
        ))}
      </ul>

      <hr />

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {allPlayers.map((name, index) => (
          <li key={index}>Mr. {index + 1} Player</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;

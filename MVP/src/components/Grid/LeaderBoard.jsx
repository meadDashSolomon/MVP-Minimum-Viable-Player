import React, { useEffect, useState } from "react";
import axios from "axios";

const LeaderBoard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setScores(response.data);
      })
      .catch((error) => {
        console.error("Error fetching leaderboard: ", error);
      });
  }, []);

  return (
    <div className="p-4 rounded-lg shadow-lg bg-gray-800 text-white text-center font-mono text-2xl">
      <h2>Scoreboard</h2>
      {scores.map((user, index) => (
        <div key={index}>
          {index + 1}. {user.username}: {user.highScore}
        </div>
      ))}
    </div>
  );
};

export default LeaderBoard;

import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard API endpoint:', apiUrl);
        console.log('Fetched leaderboard:', data);
        setLeaderboard(data.results || data);
      });
  }, [apiUrl]);

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h2 className="card-title mb-4">Leaderboard</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-primary">
              <tr>
                <th>Team</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, idx) => (
                <tr key={idx}>
                  <td>{entry.team}</td>
                  <td>{entry.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

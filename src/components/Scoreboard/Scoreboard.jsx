import styles from './Scoreboard.module.css';

import { useState, useEffect } from 'react';
function Scoreboard() {
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const fetchScores = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/scores`);
        if (response.ok) {
          const data = await response.json();
          setScores(data);
          setIsLoading(false)
          return data;
        } else {
          if (response.status === 404) throw new Error('404, Not found');
          if (response.status === 500)
            throw new Error('500, internal server error');
          // For any other server error
          throw new Error(response.status);
        }
      } catch (err) {
        console.error('Fetch', err);
      }
    };
    fetchScores();
  }, []);

  return (
    <div className={styles.scoreboard}>
      
      <h1>{isLoading ? 'Loading...' : 'Scoreboard'}</h1>
      <table className={styles.scoreTable}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={score._id}>
              <td>{index + 1}</td>
              <td>{score.username}</td>
              <td>{score.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Scoreboard;

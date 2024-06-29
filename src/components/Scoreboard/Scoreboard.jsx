import styles from './Scoreboard.module.css';

import { useState, useEffect } from 'react';
function Scoreboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      let response;
      try {
        response = await fetch('');
      } catch (err) {
        console.log(err);
      }
      const data = await response.json();
      setScores(data);
    };
    fetchScores();
  }, []);

  return (
    <div className={styles.scoreboard}>
      <h1>Scores:</h1>
      <table className={styles.scoreTable}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Walter</td>
            <td>00:12:222</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Scoreboard;

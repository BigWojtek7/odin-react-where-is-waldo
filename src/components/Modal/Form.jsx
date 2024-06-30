import styles from './Form.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form({ time }) {
  const [res, setRes] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const postScore = async () => {
      try {
        const response = await fetch('http://localhost:3000/scores/score', {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: e.target.username.value,
            time: time,
          }),
          method: 'post',
        });
        if (response.ok) {
          const data = await response.json();
          setRes(data);
          navigate('/scoreboard');
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
    postScore();
  };
  return (
    <form onSubmit={handleSubmit} className={styles.modalForm}>
      <label htmlFor="username">Username: </label>
      <input type="username" name="username" id="username" />
      <button>Submit</button>
    </form>
  );
}
export default Form;

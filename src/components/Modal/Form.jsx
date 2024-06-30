import styles from './Form.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Form({ time }) {
  const [res, setRes] = useState([]);
  const [isLoading, setIsLoanding] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoanding(true);
    const postScore = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/scores/score`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: e.target.username.value,
              time: time,
            }),
            method: 'post',
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setRes(data);
          setIsLoanding(false);
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

  useEffect(() => {
    res.success && navigate('/scoreboard');
  }, [res, navigate]);

  return (
    <>
      {isLoading ? (
        <h1>Sending...</h1>
      ) : (
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <label htmlFor="username">Username: </label>
          <input type="username" name="username" id="username" />
          <button>Submit</button>
        </form>
      )}
      {!res.success &&
        res.map((err, index) => (
          <p key={index} className={styles.error}>
            {err.msg}
          </p>
        ))}
    </>
  );
}
export default Form;

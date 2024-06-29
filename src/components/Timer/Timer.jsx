import { useState, useEffect } from 'react';
import styles from './Timer.module.css';
import Modal from '../Modal/Modal';

function Timer({ isWinner }) {
  const [count, setCount] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const newStartTime = new Date();
    setStartTime(newStartTime);
  }, []);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setCount(new Date(new Date().getTime() - startTime));
      }, 10);
      return () => clearInterval(intervalId);
    }
  }, [startTime, isRunning]);

  useEffect(() => {
    if (isWinner) setIsRunning(false);
  }, [isWinner]);

  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
  };

  return (
    <div>
      <div className={styles.timer}>{formatTime(count)}</div>
      <div>{isWinner && <Modal time={formatTime(count)} />}</div>
    </div>
  );
}

export default Timer;

import { useState, useEffect } from 'react';
import styles from './Timer.module.css';

function Timer() {
  const [count, setCount] = useState(0);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    const newStartTime = new Date();
    setStartTime(newStartTime);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(new Date(new Date().getTime() - startTime));
    }, 10);
    return () => clearInterval(intervalId);
  }, [startTime]);

  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
  };

  return <div className={styles.timer}>{formatTime(count)}</div>;
}

export default Timer;

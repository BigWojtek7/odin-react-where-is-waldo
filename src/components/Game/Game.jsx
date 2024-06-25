import styles from './Game.module.css'

function Game() {
  return (
    <div className={styles.image}>
      <img src="../src/assets/wal_beach.jpg" alt="Waldo in the beach" />
    </div>
  );
}

export default Game
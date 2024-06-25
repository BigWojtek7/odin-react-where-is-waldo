import styles from './Game.module.css';

function Game() {
  return (
    <div className="gameboard">
      <div className="characters"></div>
      <div className={styles.image}>
        <img src="../src/assets/wal_beach.jpg" alt="Waldo in the beach" />
      </div>
    </div>
  );
}

export default Game;

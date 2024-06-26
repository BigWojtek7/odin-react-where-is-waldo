import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.menu}>
        <Link to="/game"><button>Play game</button></Link>
        <Link to="scoreboard"><button>Scoreboard</button></Link>
      </div>
      <div className={styles.characters}>
        <h1>Find three characters:</h1>
        <div className={styles.images}>
          <img src="waldo.jpg" alt="waldo" />
          <img src="wizard.gif" alt="wizard" />
          <img src="odlaw.jpg" alt="odlaw" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.menu}>
        <Link to="/game"><button>Play game</button></Link>
        <Link to="scoreboard"><button>Scoreboard</button></Link>
      </div>
    </div>
  );
}

export default HomePage;

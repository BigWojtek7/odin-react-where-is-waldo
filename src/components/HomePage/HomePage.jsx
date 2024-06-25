import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div className={styles.menu}>
      <h1>Menu:</h1>
      <Link to="/game">Play game</Link>
    </div>
  );
}

export default HomePage;

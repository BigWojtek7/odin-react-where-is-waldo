import { Link } from 'react-router-dom';
import styles from './Header.module.css';
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Link to="/" className={styles.logo}>
          <img src="logo.png" alt="waldo" />
          <img src="waldo_logo.jpg" alt="logo of waldo" />
        </Link>
      </div>
    </div>
  );
}

export default Header;

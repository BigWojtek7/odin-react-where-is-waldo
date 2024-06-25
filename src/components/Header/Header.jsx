import { Link } from 'react-router-dom';
import styles from './Header.module.css';
function Header() {
  return (
    <div className="header">
      <div className={styles.headerLeft}>
        <Link to="/" className={styles.logo}>
          Where is Waldo ?
        </Link>
      </div>
    </div>
  );
}

export default Header;

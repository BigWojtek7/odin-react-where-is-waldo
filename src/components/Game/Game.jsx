import { useRef } from 'react';
import styles from './Game.module.css';

function Game() {
  const menuBoxRef = useRef(null);

  const toggleMenu = (e) => {
    e.preventDefault()
    if (
      menuBoxRef.current.style.display == 'none' ||
      !menuBoxRef.current.style.display
    ) {
      menuBoxRef.current.style.display = 'block';
      
      menuBoxRef.current.style.top = e.clientY + "px";
      menuBoxRef.current.style.left = e.clientX + "px";
      // alert(`x:${e.clientX}, y: ${e.clientY}`)
      // console.log('walter', e.clientY);
    } else {
      menuBoxRef.current.style.display = 'none';
    }
  };

  return (
    <div className="gameboard">
      <div className="characters"></div>
      <div className={styles.image}>
        <img
          onClick={toggleMenu}
          src="../src/assets/wal_beach.jpg"
          alt="Waldo in the beach"
        />
        <ul className={styles.menuBox} ref={menuBoxRef}>
          <li>Waldo</li>
          <li>The wizard</li>
          <li>Odlaw</li>
        </ul>
      </div>
    </div>
  );
}

export default Game;

import { useRef } from 'react';
import styles from './Game.module.css';

function Game() {
  const menuBoxRef = useRef(null);
  const circleRef = useRef(null);
  const imageRef = useRef(null);

  const toggleMenu = (e) => {
    e.preventDefault();
    const bodyRect = document.body.getBoundingClientRect();
    const bounding = imageRef.current.getBoundingClientRect();

    const imagePositionTop = bodyRect.top - bounding.top;
    const imagePositionLeft = bodyRect.left - bounding.left;

    const x = e.clientX - bounding.left - imagePositionLeft;
    const y = e.clientY - bounding.top - imagePositionTop;
    if (
      menuBoxRef.current.style.display == 'none' ||
      !menuBoxRef.current.style.display
    ) {
      menuBoxRef.current.style.display = 'block';
      circleRef.current.style.display = 'block';

      menuBoxRef.current.style.left = x + 'px';
      menuBoxRef.current.style.top = y + 'px';

      circleRef.current.style.left = x + 'px';
      circleRef.current.style.top = y + 'px';
    } else {
      menuBoxRef.current.style.display = 'none';
      circleRef.current.style.display = 'none';
    }
  };

  return (
    <div className="gameboard">
      <div className="characters"></div>
      <div className={styles.image}>
        <img
          ref={imageRef}
          onClick={toggleMenu}
          src="../src/assets/wal_beach.jpg"
          alt="Waldo in the beach"
        />
        <ul className={styles.menuBox} ref={menuBoxRef}>
          <li>
            <button>Waldo</button>
          </li>
          <li>
            <button>The wizard</button>
          </li>
          <li>
            <button>Odlaw</button>
          </li>
        </ul>
        <div className={styles.circle} ref={circleRef}></div>
      </div>
    </div>
  );
}

export default Game;

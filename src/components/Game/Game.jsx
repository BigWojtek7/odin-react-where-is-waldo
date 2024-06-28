import { useRef, useState } from 'react';
import styles from './Game.module.css';
import React from 'react';

import Timer from '../Timer/Timer';

function Game() {
  const menuBoxRef = useRef(null);
  const circleRef = useRef(null);

  const [circles, setCircles] = useState([]);

  const getClickCoords = (event) => {
    const bodyRect = document.body.getBoundingClientRect();
    const imageRect = event.target.getBoundingClientRect();
    

    const imagePositionTop = bodyRect.top - imageRect.top;
    const imagePositionLeft = bodyRect.left - imageRect.left;

    const x = event.clientX - imageRect.left - imagePositionLeft;
    const y = event.clientY - imageRect.top - imagePositionTop;
    console.log(event.nativeEvent.offsetX)
    console.log(event.nativeEvent.offsetY)
    return [x, y];
  };

  const toggleMenu = (event) => {
    event.preventDefault();
    const [x, y] = getClickCoords(event);
    console.log(x, y)
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

      const newCircle = React.createElement('div', {
        style: { left: x + 'px', top: y + 'px', display: 'block' },
        className: `${styles.circle}`,
        key: y,
      });
      setCircles([...circles, newCircle]);
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
        {circles}
        <div className={styles.circle} ref={circleRef}></div>
      </div>
      {/* <Timer /> */}
    </div>
  );
}

export default Game;

import { useRef, useState } from 'react';
import styles from './Game.module.css';
import React from 'react';
import gameData from '../../../gameData';

import Timer from '../Timer/Timer';

function Game() {
  const menuBoxRef = useRef(null);
  const circleRef = useRef(null);

  const [circles, setCircles] = useState([]);
  const [pixelCords, setPixelCords] = useState({});
  const [relativeCords, setRelativeCords] = useState({});

  const getClickCoords = (event) => {
    const bodyRect = document.body.getBoundingClientRect();
    const imageRect = event.target.getBoundingClientRect();

    const imagePositionTop = bodyRect.top - imageRect.top;
    const imagePositionLeft = bodyRect.left - imageRect.left;

    const x = event.clientX - imageRect.left - imagePositionLeft;
    const y = event.clientY - imageRect.top - imagePositionTop;

    //------------------------

    const { width, height } = event.target.getBoundingClientRect();
    const { offsetX, offsetY } = event.nativeEvent;

    // Cords regardless of screen size/ resolution
    const relativeCordX = Math.round((offsetX / width) * 100);
    const relativeCordY = Math.round((offsetY / height) * 100);

    return [x, y, relativeCordX, relativeCordY];
  };

  const makeCircle = (x, y, color) => {
    const newCircle = React.createElement('div', {
      style: {
        left: x + 'px',
        top: y + 'px',
        display: 'block',
        borderColor: color,
      },
      className: `${styles.circle}`,
      key: x + y,
    });
    return newCircle;
  };

  const toggleMenu = (event) => {
    event.preventDefault();
    const [x, y, relX, relY] = getClickCoords(event);

    setPixelCords({ x: x, y: y });
    setRelativeCords({ x: relX, y: relY });

    console.log(pixelCords.x, relativeCords);
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

      // const newCircle = makeCircle(x, y, 'red');
      // setCircles([...circles, newCircle]);
    } else {
      menuBoxRef.current.style.display = 'none';
      circleRef.current.style.display = 'none';
    }
  };
  // console.log(circles[0].props.style.borderColor)

  const waldoClickHandler = (event) => {
    event.preventDefault();
    console.log(relativeCords.x);
    if (relativeCords.x === 62 || relativeCords.x === 11 || relativeCords.x === 27 ) {
      const newCircle = makeCircle(pixelCords.x, pixelCords.y, 'green');
      setCircles([...circles, newCircle]);
    } else {
      const newCircle = makeCircle(pixelCords.x, pixelCords.y, 'red');
      setCircles([...circles, newCircle]);
    }
    menuBoxRef.current.style.display = 'none';
    circleRef.current.style.display = 'none';

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
            <button onClick={waldoClickHandler}>Waldo</button>
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

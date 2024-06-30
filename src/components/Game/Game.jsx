import { useEffect, useRef, useState } from 'react';
import styles from './Game.module.css';
import React from 'react';

import waldoBeach from '../../assets/wal_beach.jpg';

import gameData from '../../../gameData';

import Timer from '../Timer/Timer';

function Game() {
  const menuBoxRef = useRef(null);
  const circleRef = useRef(null);

  const [isWinner, setIsWinner] = useState(false);
  const [circles, setCircles] = useState([]);
  const [pixelCords, setPixelCords] = useState({});
  const [relativeCords, setRelativeCords] = useState({});
  const [score, setScore] = useState(0);

  const getClickCoords = (event) => {
    const bodyRect = document.body.getBoundingClientRect();
    const imageRect = event.target.getBoundingClientRect();

    const imagePositionTop = bodyRect.top - imageRect.top;
    const imagePositionLeft = bodyRect.left - imageRect.left;

    const x = event.clientX - imageRect.left - imagePositionLeft;
    const y = event.clientY - imageRect.top - imagePositionTop;

    // Coords regardless of screen size resolution

    const { width, height } = event.target.getBoundingClientRect();
    const { offsetX, offsetY } = event.nativeEvent;

    const relativeCordX = Math.round((offsetX / width) * 100);
    const relativeCordY = Math.round((offsetY / height) * 100);

    return [x, y, relativeCordX, relativeCordY];
  };

  const makeCircle = (x, y, color, pointer = 'none') => {
    const newCircle = React.createElement('div', {
      style: {
        left: x + 'px',
        top: y + 'px',
        display: 'block',
        borderColor: color,
        pointerEvents: pointer,
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
    } else {
      menuBoxRef.current.style.display = 'none';
      circleRef.current.style.display = 'none';
    }
  };
  console.log(relativeCords.x, relativeCords.y);
  const onClickMenuBox = (event, name, characterCoordX, characterCoordY) => {
    event.preventDefault();
    const toleranceY = characterCoordY + 1;

    if (
      relativeCords.x === characterCoordX &&
      (relativeCords.y === characterCoordY || relativeCords.y === toleranceY)
    ) {
      const newCircle = makeCircle(pixelCords.x, pixelCords.y, 'green', 'auto');
      setCircles([...circles, newCircle]);
      setScore(score + 1);
    } else {
      const newCircle = makeCircle(pixelCords.x, pixelCords.y, 'red');
      setCircles([...circles, newCircle]);
    }
    menuBoxRef.current.style.display = 'none';
    circleRef.current.style.display = 'none';
  };

  useEffect(() => {
    const charactersToFind = gameData.length;
    setIsWinner(score === charactersToFind);
  }, [score]);

  return (
    <div className="gameboard">
      <div className={styles.image}>
        <img onClick={toggleMenu} src={waldoBeach} alt="Waldo in the beach" />
        <ul className={styles.menuBox} ref={menuBoxRef}>
          {gameData.map((item, index) => (
            <li key={index}>
              <button
                onClick={(e) =>
                  onClickMenuBox(e, item.name, item.coords.x, item.coords.y)
                }
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        {circles}
        <div className={styles.circle} ref={circleRef}></div>
      </div>
      <Timer isWinner={isWinner} />
    </div>
  );
}

export default Game;

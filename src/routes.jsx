import App from './App';
import HomePage from './components/HomePage/HomePage';
import Game from './components/Game/Game';
import Scoreboard from './components/Scoreboard/Scoreboard';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/game', element: <Game /> },
      { path: '/scoreboard', element: <Scoreboard /> },
    ],
  },
];

export default routes;

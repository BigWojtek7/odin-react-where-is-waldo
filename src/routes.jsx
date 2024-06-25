import App from './App';
import HomePage from './components/HomePage/HomePage';
import Game from './components/Game/Game';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/game', element: <Game /> },
    ],
  },
];

export default routes;

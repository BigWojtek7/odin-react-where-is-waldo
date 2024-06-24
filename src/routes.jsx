import App from './App';
import HomePage from './components/HomePage/HomePage';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <HomePage /> }],
  },
];

export default routes;

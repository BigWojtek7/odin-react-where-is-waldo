import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="content">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

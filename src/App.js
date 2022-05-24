import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* load the navbar */}
      <NavigationBar />
      {/* load the selected route, Home ('/') by default */}
      <Outlet />
    </div>
  );
}

export default App;

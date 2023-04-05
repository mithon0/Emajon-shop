
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
     
      <Products></Products>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

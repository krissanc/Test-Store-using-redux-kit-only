import './App.css';

// IMPORT FONT AWESOME
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';


import Cart from './components/Cart.js'
import Navbar from './components/Navbar.js'
import Store from './components/Store.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Store />
    </div>
  );
}

export default App;

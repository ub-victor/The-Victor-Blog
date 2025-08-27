import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

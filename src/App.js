import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Router, Switch } from 'react-router-dom';
import router from 'json-server/lib/server/router';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>
    </Router>
  );
}

export default App;
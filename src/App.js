import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Player/>
      <Footer/>
    </div>
  );
}

export default App;

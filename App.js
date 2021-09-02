import logo from './logo.svg';
import './App.css';
import Registration from './Component/Registration';
import Timerwithclass from './Component/Timerwithclass';
import TimerWithfunction from './Component/Timerwithfunction';


function App() {
  return (
    <div className="App">
     <Timerwithclass />
     <TimerWithfunction />
    </div>
  );
}

export default App;


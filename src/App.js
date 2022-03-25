import logo from './logo.svg';
import './App.css';
import CardRCC from './Components/CardRCC';
import CardRFC from './Components/CardRFC';
import BTlayout from './Components/baiTapLayout/BTlayout';
import BTheader from './Components/baiTapLayout/BTheader';
import DataBinding from './Components/DataBinding/DataBinding';
import HandleEvent from './Components/HandleEvent/HandleEvent';

function App() {
  return (
    <div className="App">
      {/* <BTlayout/> */}
      {/* <DataBinding /> */}
      <HandleEvent/>
    </div>
  );
}

export default App;

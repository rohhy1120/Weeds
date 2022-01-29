import logo from './logo.svg';
import './App.css';
import Weeds from './weeds/Weeds';
import DUMMY_DATA from './weeds/dummydata';

function App() {
  return <div>
    <Weeds datas={DUMMY_DATA}/>
  </div>;
}

export default App;

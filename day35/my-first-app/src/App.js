import logo from './logo.svg';
import './App.css';
import First from './component/first';
import { Second } from './component/second'

function App() {
  let name ="Ashwini Samal"
  return (
    <div>
     <h1>Welcome to react js component</h1>
     <First username = {name}/>
     <Second firstname={name}/>
    </div>
  );
}

export default App;

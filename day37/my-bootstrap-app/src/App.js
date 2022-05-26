import logo from './logo.svg';
import './App.css';
import Call from './component/heros'

function App() {
  let fruits = ["Apple","Banana","Mango","Lichi"];
  return (
    <div>
      <h1>This is root component</h1><hr/>
      <h3>Fruits list:</h3>
      <ul>
        {fruits.map((fruit,index)=><li key = {index}>{fruit}</li>)}
      </ul>
      <hr/>
      <Call/>
      <hr/>
    </div>
    

  );
}

export default App;

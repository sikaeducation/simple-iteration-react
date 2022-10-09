import './App.css';

function App() {
  const fruits = [{
    id: 1,
    label: "Apple",
  },{
    id: 2,
    label: "Banana",
  },{
    id: 3,
    label: "Carrot",
  }]

  return (
    <div className="App">
      <ul className="FruitList">
      </ul>
    </div>
  );
}

function FruitDisplay({ name }) {
  return <p className="FruitDisplay">{name}</p>
}

export default App;

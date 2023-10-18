import './App.css';
import Counter from './Counter';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading text='React counter' classValue="red"/> 
        <Heading text='React counter app' classValue="gray"/> 
      </header>
      <Counter counterInitValue={20}/>
      <Counter counterInitValue={108}/>
    </div>
  );
}

export default App;

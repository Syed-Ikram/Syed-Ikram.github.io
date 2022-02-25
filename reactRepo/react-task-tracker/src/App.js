import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Demojsx from './components/Demojsx';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Greet name="Tony Stark" heroName="IronMan"/>
      <Greet name="Bruce" heroName="Hulk"/>
      <Greet name="Peter Parker" heroName="SpiderMan"/>
      <Welcome name="Bruce Wayne" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diana" heroName="Wonder Woman"/>
      <Demojsx />
      <Message />
    </div>
  );
}

export default App;

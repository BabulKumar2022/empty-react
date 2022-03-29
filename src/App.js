import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import CardGroup2 from './components/CardGroup2/CardGroup2';


function App() {
  return (
    <div className="App">
      <h2>React BootStrap</h2>
      <Button variant="warning">My button </Button>
      <br />
      <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;

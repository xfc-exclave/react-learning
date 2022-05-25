import './App.css';
import Product from './containers/Product';
import Receiver from './containers/Receiver'

function App() {
  return (
    <div style={{margin: '20px'}}>
      <Product />
      <div style={{margin: '20px 0'}}></div>
      <Receiver />
    </div>
  );
}

export default App;

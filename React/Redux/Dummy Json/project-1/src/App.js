import './App.css';
import Category from './Component/Category';
import Head from './Component/Head';
import Product from './Component/Product';

function App() {
  return (
    <div className="App">
      <Head/> 
      <Category/>     
      <Product/>
    </div>
  );
}

export default App;

import './App.css';
import CartContainer from './CartContainer';
import Navbar from './Navbar';
import {useGlobalContext} from './Context';
import Footer from './Footer';

function App() {
  const {loading} = useGlobalContext();
    if(loading){
      return(
        <div className='loading'>
          <h1>loading</h1>
        </div>
      );
    }
  return (
    <div className="App">
     <Navbar />
     <CartContainer />
     <Footer />

     
    </div>
  );
}

export default App;


import './App.css';
import About from './components/About';
import Welcome from './components/Welcome';
import Header from './components/Navbar';
import Products from './components/Products';
import Appointments from './components/Appointments';
import Services from './components/Services';

function App() {
  return (
  <>
    <div >
      <Header />
      <Welcome />
      <About />
      <Products />
      <Appointments />
      <Services />
    </div>
  </>
  );
}



export default App;

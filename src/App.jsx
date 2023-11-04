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
      <div>
        {/* Render the Header component */}
        <Header />
        {/* Render the Welcome component */}
        <Welcome />
        {/* Render the About component */}
        <About />
        {/* Render the Products component */}
        <Products />
        {/* Render the Appointments component */}
        <Appointments />
        {/* Render the Services component */}
        <Services />
      </div>
    </>
  );
}

// Export the App component so that it can be used in other parts of your application
export default App;

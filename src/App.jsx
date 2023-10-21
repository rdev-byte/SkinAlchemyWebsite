import './App.css';
import logo from './img/logo.png';

function App() {
  return (
    <div className="Page-Wrapper">
      <div className="App">
        <header className="Jumbotron">
          <span className="Welcome-Font">- Welcome to -</span>
          <div className="App-header">
            <img src={logo} className="Logo" alt="logo" />
            <p>
              Skin ALCHEMY ESTHETICS is the passionate endeavor of Megan Rizk, a dedicated esthetician with over 11 years of experience in the beauty and skincare industry.
            </p>
            <p>
              Megan's mission is to enhance your natural beauty and skin health through a combination of innovative skincare practices and the use of the finest skincare products.
            </p>
            <p>
              With a focus on individualized care, Megan is committed to providing you with a revitalizing and personalized skincare experience.
            </p>
            <p>
              Her expertise covers a wide range of skincare services, making Skin Alchemy your go-to destination for achieving radiant and healthy skin.
            </p>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
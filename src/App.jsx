import './App.css';
import logo from './img/logo.png';

function App() {
  return (
    <div className="Page-Wrapper">
      <header className="Jumbotron">
      </header>
      <div className="App">
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
      </div>
      <div classname="section2">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum,
        </p>
      </div>
    </div>
  );
}

export default App;
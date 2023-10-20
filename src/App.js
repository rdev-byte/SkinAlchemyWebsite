import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        </p>
{/* 'Welcome to' with default font */}
<span className="Welcome-Font">Welcome to</span>
{/* 'Skin ALCHEMY' with Maharlika font and 'ESTHETICS' in smaller font size */}
<span className="Maharlika-Font">Skin ALCHEMY <span className="Smaller-Font">ESTHETICS</span></span>


        <p>
          Skin Alchemy is the passionate endeavor of Megan Rizk, a dedicated esthetician with over 11 years of experience in the beauty and skincare industry.
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;

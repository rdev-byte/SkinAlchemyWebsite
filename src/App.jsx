import StapleIndividual from './StapleIndividual';
import logo from './img/logo.png';

function App() {
  const sections = [
    {
      id: 1,
      section: 'Section 1',
    },
    {
      id: 2,
      section: 'Section 2',
    },
    {
      id: 3,
      section: 'Section 3',
    },
  ];

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
        {sections.map((section) => (
          <section key={section.id}>
            <h2>{section.section}</h2>
            <StapleIndividual data={articleData} />
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;

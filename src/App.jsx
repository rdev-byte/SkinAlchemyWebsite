// Import the logo image
import logo from './img/logo.png';

// Import the CSS styles
import './App.css';
import About from './components/About';
import Welcome from './components/Welcome';

// Define the App function
function App() {
  // Return the HTML markup for the app
  return (
    <>
      <div className="Page-Wrapper">
        <header className="Jumbotron"></header>
        <div className="App">
          <div className="Welcome-Container">
            <span className="Welcome-Font">- Welcome to -</span>
          </div>
          <div className="App-header">
            <img src={logo} className="Logo" alt="logo" />
          </div>
        </div>

        {sections.map((section) => (
          <section key={section.id}>
            <h2>{section.section}</h2>
            {section.content}
          </section>
        ))}
      </div>
    </>
  );
}

const sections = [
  {
    id: 1,
    section: 'ABOUT THE SPA',
    content: (
      <div>
        {/* Content for "ABOUT THE SPA" section */}
      </div>
    ),
  },
  {
    id: 2,
    section: 'ABOUT THE ESTHETICIAN',
    content: (
      <div>
        {/* Content for "ABOUT THE ESTHETICIAN" section */}
      </div>
    ),
  },
  {
    id: 3,
    section: 'SERVICES PROVIDED',
    content: (
      <div>
        <ul className="service-ulst">
          <li id="dermaplane">Dermaplane</li>
          <li id="face-wax">Face Wax</li>
          <li id="facial-cupping">Facial Cupping</li>
          <li id="high-frequency">High Frequency</li>
          <li id="ice-gloves">Ice Gloves</li>
          <li id="microcurrent">MicroCurrent</li>
          <li id="red-light-therapy">Red Light Therapy</li>
        </ul>
      </div>
    ),
  },
];

export default App;

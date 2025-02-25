import Navbar from '/home/janewmwaura/personalprojectportfolio/Denisportfolio/portfolio-starter/src/components/Navbar/Navbar.jsx';
import './App.css';
import Intro from '/home/janewmwaura/personalprojectportfolio/Denisportfolio/portfolio-starter/src/components/Intro/Intro.jsx';
import Services from '/home/janewmwaura/personalprojectportfolio/Denisportfolio/portfolio-starter/src/components/Services/Services.jsx';
import Certifications from './components/Certifications/Certifications.jsx';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Services/>
     <Certifications/>
    </div>
  );
}

export default App;

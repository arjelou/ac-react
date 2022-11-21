import './App.css';
import Header from './component/Header/header';
import About from './component/About/about';
import Project from './component/Project/project';
import Experience from './component/Experience/experience';
import Contact from './component/Contact/contact';
import Footer from './component/Footer/footer';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <About />
        <Project />
        <Experience />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;

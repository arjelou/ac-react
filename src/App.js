import './App.css';
import Header from './component/Header/header';
import About from './component/About/about';
import Project from './component/Project/project';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <About />
        <Project />
      </header>
    </div>
  );
}

export default App;

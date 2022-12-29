import './App.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';

import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  );
}


export default App;

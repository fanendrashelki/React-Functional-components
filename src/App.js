import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import About from './components/About';
import Menu from './components/Menu';
import Special from './components/Special'
import Events from './components/Events';
import Chef from './components/Chef';
import Gallary from './components/Gallary';
import Book_room from './components/Book_room';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <About/>
    <Menu/>
    <Special/>
    <Events/>
    <Chef/>
    <Gallary/>
    <Book_room/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home/>;
    }
    if (currentPage === 'About') {
      return <About/>;
    }
    if (currentPage === 'Projects') {
      return <Projects/>;
    }
    if (currentPage === 'Contact') {
      return <Contact/>;
    }  
  };

  return (
    <div className='App'>
      <Header className="App-header font-face-rt" currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      {renderPage()}
      <Footer className="App-footer"/>
    </div>
  );
}

export default App;
import React, {useState} from 'react';
import './App.css';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
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
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default App;
import React from 'react';
import Navigation from './Navigation';

export default function Header({currentPage, setCurrentPage}) {

  return (
    <header className='background-img'>
      <h1 className="App-header">Gabrielle Humkey</h1>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </header>
  );
}
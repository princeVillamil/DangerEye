import React, { useState } from 'react';
import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import './assets/style/HelpCenter.css';

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
    // search functionality here
  };

  return (
    <div className='helpCenterPage'>
         <HeaderComponent/>
    <div className="help-center">
      <header className="header">
        <h1>Hello, what can we help you with?</h1>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm} 
            onChange={handleInputChange} 
          />
          <button type="button" onClick={handleSearch}>🔍</button>
        </div>
      </header>
      <div className="content">
        <div className="card">
          <h2>Getting Started</h2>
          <p>Information on how to set up and begin.</p>
        </div>
        <div className="card">
          <h2>Managing Notifications</h2>
          <p>Instructions on managing alerts and notifications.</p>
        </div>
        <div className="card">
          <h2>Reporting Issues</h2>
          <p>Steps for reporting any concerns.</p>
        </div>
        <div className="card">
          <h2>Profile Management</h2>
          <p>Details on updating your profile settings.</p>
        </div>
        <div className="card">
          <h2>Contact Support</h2>
          <p>Ways to get in touch for assistance.</p>
        </div>
      </div>
      </div>
      <FooterComponent/>
    </div>
  );
};

export default HelpCenter;

import React from 'react';
import './fin.css';
import { useNavigate } from 'react-router-dom';
import sbiImage from 'C:/Darshan/HACKATHON/NEXGEN/fin/src/components/images/sbi.png';
import uniImage from 'C:/Darshan/HACKATHON/NEXGEN/fin/src/components/images/union.png';
import hdfcImage from 'C:/Darshan/HACKATHON/NEXGEN/fin/src/components/images/HDFC1.png';

const banks = [
  { name: 'SBI', image: sbiImage, link: 'https://homeloans.sbi/' },
  { name: 'UNION BANK', image: uniImage, link: 'https://www.unionbankofindia.co.in' },
  { name: 'HDFC', image: hdfcImage, link: 'https://www.hdfcbank.com' },
  { name: 'Bank 4', image: 'https://via.placeholder.com/150', link: 'https://placeholder.com' },
  { name: 'Bank 5', image: 'https://via.placeholder.com/150', link: 'https://placeholder.com' },
  { name: 'Bank 6', image: 'https://via.placeholder.com/150', link: 'https://placeholder.com' },
];

const BankBox = ({ name, image, link }) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer'); // Open link in new tab
  };

  return (
    <div className="bank-box">
      <img src={image} alt={name} /><br/>
      <button className="bank-button" onClick={handleClick}>{name}</button>  {/* Button with name as text */}
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Bank" />
    </div>
  );
};

const Finance = () => {
    const navigate = useNavigate(); // Utilize useNavigate hook for navigation

    const handleEmiclick = () => {
        navigate('/emi-calculator'); // Navigate to EMI calculator route
        };
  return (
    <div>
      <header id="header">
          <h1>FINANCE</h1>
          <div className="header-container">  
              <button className="emi-button" onClick={handleEmiclick}>EMI Calculator</button>
              <SearchBar />
          </div>
      </header>
      <div className="bank-container">
        {banks.map((bank) => (
          <BankBox key={bank.name} name={bank.name} image={bank.image} />
        ))}
      </div>
    </div>
  );
};

export default Finance;

//ReactDOM.createRoot(document.getElementById('root')).render(<App />);

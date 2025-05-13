import React from 'react';
import './../css/HeaderList.css';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function HeaderList() {
  return (
    <ul className='header-list'>
      {/* Route Navigation */}
      <li>
        <RouterLink style={{textDecoration:"none",color:"black"}} to="/pricing">Pricing</RouterLink>
      </li>

      {/* Scroll Navigation */}
      <li>
        <ScrollLink to="Contactus" smooth={true} duration={500}>
          Contact
        </ScrollLink>
      </li>
    </ul>
  );
}

export default HeaderList;

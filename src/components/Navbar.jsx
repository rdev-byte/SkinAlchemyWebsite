import '../App.css';
import { Navbar, Collapse, NavbarToggler, Nav } from 'reactstrap';
import { useState } from 'react';

const Header = () => {
  // State for managing the menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to scroll to a section when a link is clicked
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close the menu after clicking a link
    setMenuOpen(false);
  };

  return (
    <Navbar className="menuBar">
      <NavbarToggler />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          {/* Each link triggers the scrollToSection function */}
          <a href="#thespa" onClick={() => scrollToSection('about')}>
            <i /> The Spa
          </a>
          <a href="aboutme" onClick={() => scrollToSection('appointments')}>
            <i /> About Me
          </a>
          <a href="#schedule" onClick={() => scrollToSection('schedule')}>
            <i /> Schedule
          </a>
          <a href="#services" onClick={() => scrollToSection('services')}>
            <i /> Services
          </a>
          <a href="#products" onClick={() => scrollToSection('products')}>
            <i /> Products
          </a>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;

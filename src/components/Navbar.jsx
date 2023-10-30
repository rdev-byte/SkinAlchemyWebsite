import '../App.css';
import {
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
} from 'reactstrap';

import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <Navbar class="Navbar">
            <NavbarToggler />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <a href="#products" onClick={() => scrollToSection('products')}>
                        <i /> Products
                    </a>
                    <a href="#services" onClick={() => scrollToSection('services')}>
                        <i /> Services
                    </a>
                    <a href="#appointments" onClick={() => scrollToSection('appointments')}>
                        <i /> Schedule
                    </a>
                    <a href="#about" onClick={() => scrollToSection('about')}>
                        <i /> About
                    </a>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;

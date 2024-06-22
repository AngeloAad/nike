import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { headerLogo } from '../nike_landing_assets/assets/images';
import { hamburger } from '../nike_landing_assets/assets/icons';
import SideBar from './SideBar';
import { navLinks } from '../constants';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate(); // Initialize navigate function

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = () => {
        navigate('/'); // Navigate to the home page when a nav item is clicked
    };

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className={`flex justify-between items-center max-container ${isMenuOpen ? 'hidden' : 'flex'}`}>
                <Link to="/" onClick={handleNavClick}>
                    <img 
                        src={headerLogo} 
                        alt="logo"
                        width={130}
                        height={29} 
                    />
                </Link>

                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <Link 
                                to="/" // Navigate to home page on click
                                className="fonts-montserat leading-normal text-lg text-slate-gray"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul> 

                <div className="hidden max-lg:block">
                    <button onClick={toggleMenu}>
                        <img 
                            src={hamburger} 
                            alt="hamburger" 
                            width={25}
                            height={25}
                            className="cursor-pointer"
                        />
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <SideBar toggleMenu={toggleMenu} />
            )}
        </header>
    );
};

export default Nav;

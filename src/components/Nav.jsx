import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import useNavigate hook
import { headerLogo } from '../nike_landing_assets/assets/images';
import { hamburger } from '../nike_landing_assets/assets/icons';
import SideBar from './SideBar';
import { navLinks } from '../constants';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className={`flex justify-between items-center max-container ${isMenuOpen ? 'hidden' : 'flex'}`}>
                <Link to="/" >
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
                            <a 
                                href={item.href} 
                                className="fonts-montserat leading-normal text-lg text-slate-gray"
                            >
                                {item.label}
                            </a>
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

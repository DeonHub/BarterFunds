// src/components/Header.js
import React, { useState, useEffect } from 'react';
import MainMenu from './MainHeader';
import MobileMenu from './MobileHeader';

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header>
            {isMobile ? <MobileMenu /> : <MainMenu />}
        </header>
    );
};

export default Header;

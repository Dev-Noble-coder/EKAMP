import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <Navbar />
            {/* You can add header, sidebar, or footer here */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
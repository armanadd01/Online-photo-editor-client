import React from 'react';
import Header from '../../Component/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;
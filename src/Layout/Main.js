import React from 'react';
import { Outlet } from 'react-router-dom';
import NavgitionBar from '../Header/NavgitionBar';

const Main = () => {
    return (
        <div>

            <NavgitionBar></NavgitionBar>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;
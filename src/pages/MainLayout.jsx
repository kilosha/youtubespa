import React from 'react';
import { Outlet } from 'react-router';

import { Layout } from 'antd';

import HeaderComponent from '../components/HeaderComponent';

const MainLayout = () => {
    return (
        <div className="mainLayout">
            <Layout
                style={{
                    position: 'sticky',
                    backgroundColor: 'white',
                    width: '100%',
                    top: 0,
                    zIndex: 1,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <HeaderComponent />
                <Outlet />
            </Layout>
        </div>
    );
};

export default MainLayout;

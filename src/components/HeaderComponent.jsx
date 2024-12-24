import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

import slideImg1 from '../assets/react.svg';
import { Link, NavLink, useLocation } from 'react-router';
// import { useLocation } from 'react-router-dom';

const HeaderComponent = () => {
    const location = useLocation();
    const [selectedMenuKey, setSelectedMenuKey] = React.useState(location.pathname);
    const items = [
        {
            key: '/',
            label: <NavLink to="/">Поиск</NavLink>
        },
        {
            key: '/favorites',
            label: <NavLink to="/favorites">Избранное</NavLink>
        }
    ];

    const onExitBtnClick = () => {
        localStorage.removeItem('token');
    };

    // React.useEffect(() => {
    //     setSelectedMenuKey(location.pathname);
    // }, [location]);

    return (
        <Header
            style={{
                position: 'sticky',
                backgroundColor: 'white',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid rgba(5, 5, 5, 0.06)'
            }}>
            <img src={slideImg1} />
            <Menu
                //theme="light"
                mode="horizontal"
                defaultSelectedKeys={[selectedMenuKey]}
                items={items}
                style={{
                    flex: 1,
                    minWidth: 0,
                    borderBottom: '0px solid rgba(5, 5, 5, 0.06)'
                }}
            />
            <Link to="/login">
                <Button type="link" onClick={onExitBtnClick}>
                    Выйти
                </Button>
            </Link>
        </Header>
    );
};

export default HeaderComponent;

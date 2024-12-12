import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

import slideImg1 from '../assets/react.svg';
import { Link, NavLink } from 'react-router';

const HeaderComponent = () => {
    const items = [
        {
            key: 'Search',
            label: <NavLink to="/">Поиск</NavLink>
        },
        {
            key: 'Favorites',
            label: <NavLink to="/favorites">Избранное</NavLink>
        }
    ];
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
                defaultSelectedKeys={['Search']}
                items={items}
                style={{
                    flex: 1,
                    minWidth: 0,
                    borderBottom: '0px solid rgba(5, 5, 5, 0.06)'
                }}
            />
            <Link to="/login">
                <Button type="link">Выйти</Button>
            </Link>
        </Header>
    );
};

export default HeaderComponent;

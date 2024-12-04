import React from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';

const LoginPage = () => {
    return (
        <div>
            <Link to="/">
                <Button type="link">Войти</Button>
            </Link>
        </div>
    );
};

export default LoginPage;

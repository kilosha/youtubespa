import React from 'react';
import { Typography } from 'antd';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div className="loginPageContent">
            <Typography.Title level={3} className="headerTitle">
                Welcome!
            </Typography.Title>
            <LoginForm />
        </div>
    );
};

export default LoginPage;

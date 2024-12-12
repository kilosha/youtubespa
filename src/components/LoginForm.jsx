import React from 'react';
import { useNavigate } from 'react-router';

import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const LoginForm = () => {
    let navigate = useNavigate();

    const onFinish = (values) => {
        axios
            .post(`${import.meta.env.VITE_BACKEND_URL_DEV}/api/auth/login`, values)
            .then(function (response) {
                localStorage.setItem('token', response.data.token);
                navigate('/');
            })
            .catch((e) => {
                alert(e?.response?.data?.message);
            });

        //console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8
            }}
            wrapperCol={{
                span: 16
            }}
            style={{
                maxWidth: 600
            }}
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item
                label="Логин"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Введите логин!'
                    }
                ]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Введите пароль"'
                    }
                ]}>
                <Input.Password />
            </Form.Item>

            {/* <Form.Item name="remember" valuePropName="checked" label={null}>
                <Checkbox>Запомнить меня</Checkbox>
            </Form.Item> */}

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;

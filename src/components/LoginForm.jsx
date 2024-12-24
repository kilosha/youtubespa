import React from 'react';
import { useNavigate } from 'react-router';

import { Button, Checkbox, Form, Input, message } from 'antd';
import axios from 'axios';

import { FormItem } from 'react-hook-form-antd';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const LoginForm = () => {
    let navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();

    // const schema = z.object({
    //     username: z
    //         .string()
    //         .min(1, { message: 'Required' })
    //         .max(15, { message: 'Username should be less than 15 characters' }),
    //     password: z.string().min(1, { message: 'Required' }),
    //     remember: z.boolean()
    //});

    const { control, handleSubmit } = useForm({
        // defaultValues: { username: '', password: '' }
        // resolver: zodResolver(schema)
    });

    const openMessage = (type, message) => {
        messageApi.open({
            key: 'my',
            type,
            content: message || type
        });
    };

    const onFinish = (values) => {
        openMessage('loading');
        axios
            .post(`${import.meta.env.VITE_BACKEND_URL_DEV}/api/auth/login`, values)
            .then(function (response) {
                localStorage.setItem('token', response.data.token);
                navigate('/');
            })
            .catch((e) => {
                openMessage('error', e?.response?.data?.message);
                //alert(e?.response?.data?.message);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {contextHolder}

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
                onFinish={handleSubmit((data) => {
                    onFinish(data);
                })}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <FormItem
                    control={control}
                    label="Логин"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Введите логин'
                        },
                        {
                            pattern: /^[a-zA-Z0-9_]+$/,
                            message: 'Username should contain only letters, numbers and _'
                        }
                    ]}>
                    <Input />
                </FormItem>

                <FormItem
                    control={control}
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Введите пароль'
                        },
                        {
                            pattern: /^[a-zA-Z0-9_]+$/,
                            message:
                                'Password should contain only letters, numbers and special signs like !@_-'
                        }
                    ]}>
                    <Input.Password />
                </FormItem>

                {/* <Form.Item name="remember" valuePropName="checked" label={null}>
                <Checkbox>Запомнить меня</Checkbox>
            </Form.Item> */}

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default LoginForm;

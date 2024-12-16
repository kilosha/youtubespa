import React, { useState } from 'react';
import { Button, Form, Input, Modal, Slider } from 'antd';
import { Col, InputNumber, Row } from 'antd';
import axios from 'axios';

const FavoritesModal = ({ isModalOpen, setIsModalOpen, requestText }) => {
    const [form] = Form.useForm();
    const [formValues, setFormValues] = useState();
    const [open, setOpen] = useState(false);
    const onCreate = (values) => {
        console.log('Received values of form: ', values);

        const token = localStorage.getItem('token');
        axios
            .post(`${import.meta.env.VITE_BACKEND_URL_DEV}/api/favorites`, values, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(function (response) {
                console.log(response.data);
                // localStorage.setItem('token', response.data.token);
                // navigate('/');
                setIsModalOpen(false);
            })
            .catch((e) => {
                alert(e?.response?.data?.message);
            });

        // setFormValues(values);
        // setOpen(false);
    };
    // const showModal = () => {
    //     setIsModalOpen(true);
    // };
    const handleOk = () => {
        setIsModalOpen(false);

        const token = localStorage.getItem('token');
        axios
            .post(`${import.meta.env.VITE_BACKEND_URL_DEV}/api/favorites`, { values, token })
            .then(function (response) {
                console.log(response.data);
                // localStorage.setItem('token', response.data.token);
                // navigate('/');
            })
            .catch((e) => {
                alert(e?.response?.data?.message);
            });
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [inputValue, setInputValue] = useState(25);
    const onChange = (newValue) => {
        setInputValue(newValue);
    };

    React.useEffect(() => {
        if (isModalOpen) {
            form.setFieldsValue({ requestText: requestText });
        }
    }, [isModalOpen]);

    return (
        <>
            <Modal
                open={isModalOpen}
                forceRender
                //onOk={handleOk}
                // onCancel={handleCancel}
                title="Сохранить запрос"
                okText="Сохранить"
                cancelText="Не сохранять"
                okButtonProps={{
                    autoFocus: true,
                    htmlType: 'submit'
                }}
                onCancel={() => setIsModalOpen(false)}
                destroyOnClose
                modalRender={(dom) => (
                    <Form
                        layout="vertical"
                        form={form}
                        name="form_in_modal"
                        clearOnDestroy
                        onFinish={(values) => onCreate(values)}>
                        {dom}
                    </Form>
                )}>
                <Form.Item name="requestText" label="Запрос">
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    name="title"
                    label="Название"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the title of collection!'
                        }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item name="sort" label="Сортировать по">
                    {/**тут лучше не инпут а чекбокс или селект что-то такое */}
                    <Input />
                </Form.Item>

                <Form.Item name="slider" label="Максимальное количество">
                    <Row>
                        <Col span={12}>
                            <Slider
                                defaultValue={25}
                                min={1}
                                max={50}
                                onChange={onChange}
                                value={typeof inputValue === 'number' ? inputValue : 0}
                            />
                        </Col>
                        <Col span={4}>
                            <InputNumber
                                min={1}
                                max={50}
                                style={{
                                    margin: '0 16px'
                                }}
                                value={inputValue}
                                onChange={onChange}
                            />
                        </Col>
                    </Row>
                </Form.Item>
            </Modal>
        </>
    );
};
export default FavoritesModal;

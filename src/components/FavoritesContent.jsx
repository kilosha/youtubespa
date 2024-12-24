import { List, Image } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Input, Layout, Typography } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import FavoritesModal from './FavoritesModal';
import { useNavigate } from 'react-router';

const { Content } = Layout;
const { Title } = Typography;

const FavoritesContent = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editItem, setEditItem] = useState({});
    let navigate = useNavigate();

    const getItems = () => {
        const token = localStorage.getItem('token');
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL_DEV}/api/favorites`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(function (response) {
                console.log(response.data);
                // localStorage.setItem('token', response.data.token);
                // navigate('/');
                setData(response.data);
            })
            .catch((e) => {
                alert(e?.response?.data?.message);
            });
    };

    useEffect(() => {
        getItems();
    }, []);

    const onEditItemClick = (item) => {
        setEditItem(item);
        setIsModalOpen(true);
        console.log(item);
    };

    const onDeleteItemClick = (item) => {
        const token = localStorage.getItem('token');
        axios
            .delete(`${import.meta.env.VITE_BACKEND_URL_DEV}/api/favorites/${item._id}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(function (response) {
                console.log(response.data);
                getItems();
            })
            .catch((e) => {
                alert(e?.response?.data?.message);
            });
    };

    return (
        <Content
            style={{
                padding: '0 48px',
                width: '100%',
                height: '100%'
            }}>
            <div
                style={{
                    padding: 24,
                    minHeight: 380,
                    background: 'white'
                    // background: colorBgContainer,
                    // borderRadius: borderRadiusLG,
                }}>
                <Typography>
                    <Title level={3}>Избранное</Title>
                </Typography>
                <List
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item style={{ display: 'flex' }}>
                            <div onClick={() => navigate('/')}>{item.title}</div>
                            <div
                                style={{
                                    width: '35px',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                <EditTwoTone onClick={() => onEditItemClick(item)} />
                                <DeleteTwoTone onClick={() => onDeleteItemClick(item)} />
                            </div>
                        </List.Item>
                    )}
                />
            </div>

            <FavoritesModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                favItem={editItem}
                isEditMode={true}
                getItems={getItems}
            />
        </Content>
    );
};

export default FavoritesContent;

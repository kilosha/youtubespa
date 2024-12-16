import { List, Image } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Input, Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const FavoritesContent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
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
    }, []);

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
                        <List.Item>
                            <List.Item.Meta
                                title={item.title}
                                // avatar={<Image src={item.picture} width={200} />}
                                // title={
                                //     <a
                                //         href={`https://www.youtube.com/watch?v=${item.id}`}
                                //         target="_blank">
                                //         {item.title}
                                //     </a>
                                // }
                                // description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </Content>
    );
};

export default FavoritesContent;

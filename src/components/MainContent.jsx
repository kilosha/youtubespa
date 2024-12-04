import React, { useState } from 'react';
import { Input, Layout, Typography } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';
import axios from 'axios';
import VideosList from './VideosList';
import VideosCards from './VideosCards';
import FavoritesModal from './FavoritesModal';

const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

const MainContent = () => {
    const [videosInfo, setData] = useState([]);
    const getData = async (value) => {
        const { data } = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL_DEV}/api/youtube/search?searchText=${value}`
        );

        setData(data);
        setIsAddToFavoritesVisible(true);
    };

    const onSearch = async (value, _e, info) => {
        console.log(info?.source, value);
        getData(value);
    };

    const [isAddToFavoritesVisible, setIsAddToFavoritesVisible] = useState(false);

    const [mode, setMode] = useState('List');
    const onTypeChange = (mode) => {
        setMode(mode);
    };

    const onSaveToFavoritesButtonClick = () => {
        setIsModalOpen(true);
    };

    const [isModalOpen, setIsModalOpen] = useState(true);

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
                    <Title level={3}>Поиск видео</Title>
                </Typography>

                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    enterButton
                    suffix={
                        isAddToFavoritesVisible ? (
                            <HeartOutlined onClick={onSaveToFavoritesButtonClick} />
                        ) : (
                            ''
                        )
                    }
                />

                <Segmented
                    options={[
                        {
                            value: 'List',
                            icon: <BarsOutlined />
                        },
                        {
                            value: 'Kanban',
                            icon: <AppstoreOutlined />
                        }
                    ]}
                    onChange={onTypeChange}
                />

                {mode === 'List' ? (
                    <VideosList data={videosInfo} />
                ) : (
                    <VideosCards data={videosInfo} />
                )}

                <FavoritesModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            </div>
        </Content>
    );
};

export default MainContent;

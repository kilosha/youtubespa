import React, { useState } from 'react';
import { Input, Layout, Skeleton, Typography } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';
import axios from 'axios';
import VideosList from './VideosList';
import VideosCards from './VideosCards';
import FavoritesModal from './FavoritesModal';
import SearchComponent from './SearchComponent';

import { List, Image } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;

const MainContent = () => {
    const [videosInfo, setData] = useState([]);
    const [totalCount, setTotalCount] = useState();
    const [loading, setIsLoading] = useState(false);
    const [videosSearchText, setVideosSearchText] = useState();
    const [searchInput, setSearchInput] = useState('');
    const getData = async (value) => {
        const { data } = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL_DEV}/api/youtube/search?searchText=${value}`
        );

        setData(data.items);
        setTotalCount(data.totalCount);
        setIsAddToFavoritesVisible(true);
        setVideosSearchText(value);
        setIsLoading(false);
    };

    // const onSearch = async (value, _e, info) => {
    //     console.log(info?.source, value);
    //     getData(value);
    // };

    const [isAddToFavoritesVisible, setIsAddToFavoritesVisible] = useState(false);

    const [mode, setMode] = useState('List');
    const onTypeChange = (mode) => {
        setMode(mode);
    };

    // const onSaveToFavoritesButtonClick = () => {
    //     setIsModalOpen(true);
    // };

    // const onSearchInputChange = (event) => {
    //     setSearchInput(event.target.value);
    // };

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Content
            style={{
                padding: '0 50px',
                width: '100%',
                height: '100%'
            }}>
            <div
            // style={{
            //     padding: 24,
            //     minHeight: 380,
            //     background: 'white'
            //     // background: colorBgContainer,
            //     // borderRadius: borderRadiusLG,
            // }}
            >
                <SearchComponent
                    videosInfo={videosInfo}
                    getData={getData}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    isAddToFavoritesVisible={isAddToFavoritesVisible}
                    setIsModalOpen={setIsModalOpen}
                    loading={loading}
                    setIsLoading={setIsLoading}
                />

                {!loading && videosInfo && videosInfo.length > 0 && (
                    <div
                        style={{
                            margin: '1.5em 0 2em 0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                        <div style={{ display: 'flex', alignItems: 'baseline' }}>
                            <Title style={{ margin: 0 }} level={4}>
                                Видео по запросу "{videosSearchText}"
                            </Title>
                            <Text
                                disabled
                                style={{
                                    marginLeft: '0.8em',
                                    cursor: 'text',
                                    fontSize: '16px'
                                }}>
                                {totalCount}
                            </Text>
                        </div>

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

                        <FavoritesModal
                            isModalOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                            requestText={searchInput}
                        />
                    </div>
                )}

                {(loading || (videosInfo && videosInfo.length > 0)) && (
                    <>
                        {mode === 'List' ? (
                            <VideosList data={videosInfo} loading={loading} />
                        ) : (
                            <VideosCards data={videosInfo} />
                        )}
                    </>
                )}
            </div>
        </Content>
    );
};

export default MainContent;

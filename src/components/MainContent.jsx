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
    const [videosInfo, setData] = useState([
        {
            id: 'GaSOqXFleho',
            title: 'Diana and Papa have fun at the water park',
            description:
                'Diana and Papa went to the water park. Diana and dad having fun playing in the water park and pretend play. It was a super fun ...',
            picture: 'https://i.ytimg.com/vi/GaSOqXFleho/hqdefault.jpg'
        },
        {
            id: 'DKyZ6zEdCGw',
            title: 'Diana and Papa at the Water Park',
            description:
                'Diana and Papa went to the water park. Diana and dad having fun playing in the water park. It was a super fun day with Dad.',
            picture: 'https://i.ytimg.com/vi/DKyZ6zEdCGw/hqdefault.jpg'
        },
        {
            id: 'BfLU9Bref3g',
            title: 'Diana and dad are going to the dentist',
            description:
                "Diana woke up in the morning and saw a swollen cheek. She had a toothache. Diana and dad are going to the dentist. Diana's ...",
            picture: 'https://i.ytimg.com/vi/BfLU9Bref3g/hqdefault.jpg'
        },
        {
            id: 'OYzIUntnh70',
            title: 'Diana and Peppa Pig Theme Park',
            description:
                'Diana and Roma having lots of fun at Peppa Pig World Theme Park. This is amusement park for children with the characters of ...',
            picture: 'https://i.ytimg.com/vi/OYzIUntnh70/hqdefault.jpg'
        },
        {
            id: 'eRUm4ptTQ2E',
            title: 'Diana and Roma Paw Patrol: The Movie - Keep Up with the Pups - Kids Song (Official Music Video)',
            description:
                'This is an ad for Paw Patrol: The Movie. “Keep Up with the Pups” Written by Ruwanga Samath, Joey Diggs & Izzy Diggs Produced ...',
            picture: 'https://i.ytimg.com/vi/eRUm4ptTQ2E/hqdefault.jpg'
        },
        {
            id: 'E6RHa_s8URc',
            title: 'Diana with Mommy doing shopping in a toy store Funny video for kids and toddlers',
            description:
                'Diana and with her Mommy came to the toy store. Little girl is playing in the store and shopping kids toys. Funny video for kids and ...',
            picture: 'https://i.ytimg.com/vi/E6RHa_s8URc/hqdefault.jpg'
        },
        {
            id: 'NFrjZx1wL0s',
            title: 'Diana and Roma&#39;s Mighty PAW Patrol Adventure!',
            description:
                'PAW PATROL: THE MIGHTY MOVIE. ONLY IN THEATRES SEPTEMBER 29! Tickets Available Now!" #PAWPatrolMovie ...',
            picture: 'https://i.ytimg.com/vi/NFrjZx1wL0s/hqdefault.jpg'
        },
        {
            id: '7CFTMP_8iKU',
            title: 'Diana and Roma - Kindergarten Graduation',
            description:
                'Roma and Diana goes to their Kindergarten Graduation. They have learned a lot and had an all around great time! Roma is ...',
            picture: 'https://i.ytimg.com/vi/7CFTMP_8iKU/hqdefault.jpg'
        },
        {
            id: 'OcZ0wO5srGs',
            title: 'Diana and Roma visited Disneyland!',
            description:
                'Diana and Roma visited Disneyland in Paris. It was a fun day of adventure for the whole family! Diana and Roma EN ...',
            picture: 'https://i.ytimg.com/vi/OcZ0wO5srGs/hqdefault.jpg'
        },
        {
            id: 'gJpp2Gf_bjo',
            title: 'Lady Diana: What is your name? Where are you from? #ladybunny #ladydiana #diana #dianabunny',
            description: '',
            picture: 'https://i.ytimg.com/vi/gJpp2Gf_bjo/hqdefault.jpg'
        },
        {
            id: 'L-8tGXXgGgg',
            title: 'Roma and Diana playing at the WaterPark, Baby Shark Song',
            description:
                "Roma and Diana playing at the WaterPark. Diana's Family went on Vacation to Water Amusement Park with a huge pool and ...",
            picture: 'https://i.ytimg.com/vi/L-8tGXXgGgg/hqdefault.jpg'
        },
        {
            id: 'AjJxCLqvUFc',
            title: 'Vacaciones de verano con la familia de Diana y Roma',
            description:
                'Diana y Roma pasan activa y alegremente tiempo al aire libre, nadando y tomando el sol, fortaleciendo su salud durante las ...',
            picture: 'https://i.ytimg.com/vi/AjJxCLqvUFc/hqdefault.jpg'
        }
    ]);
    const [totalCount, setTotalCount] = useState(228);
    const [loading, setIsLoading] = useState(false);
    const [videosSearchText, setVideosSearchText] = useState('diana pilat');
    const [searchInput, setSearchInput] = useState('');
    const getData = async (value) => {
        const { data } = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL_DEV}/api/youtube/search?searchText=${value}`
        );

        setData(data);
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

                {(loading || (videosInfo && videosInfo.length > 0)) && (
                    <>
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
                        </div>

                        {mode === 'List' ? (
                            <VideosList data={videosInfo} loading={loading} />
                        ) : (
                            <VideosCards data={videosInfo} />
                        )}

                        <FavoritesModal
                            isModalOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                            requestText={searchInput}
                        />
                    </>
                )}
            </div>
        </Content>
    );
};

export default MainContent;

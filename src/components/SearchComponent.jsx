import React, { useState } from 'react';
import { Input, Layout, Typography } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { Search } = Input;

const SearchComponent = ({
    videosInfo,
    getData,
    searchInput,
    setSearchInput,
    setIsModalOpen,
    isAddToFavoritesVisible,
    loading,
    setIsLoading
}) => {
    const onSearch = async (value, _e, info) => {
        console.log(info?.source, value);
        setIsLoading(true);
        getData(value);
    };

    const onSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const onSaveToFavoritesButtonClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div className={loading || videosInfo.length ? 'searchCompleted' : 'searchVideo'}>
            <Typography
                style={{
                    marginTop: loading || videosInfo.length ? '' : '20vh',
                    marginBottom: loading || videosInfo.length ? '' : '5vh'
                }}>
                <Title level={3}>Поиск видео</Title>
            </Typography>
            <Search
                placeholder="Что смотрим сегодня?)"
                style={{ width: loading || videosInfo.length ? '100%' : '50%' }}
                onSearch={onSearch}
                value={searchInput}
                onChange={onSearchInputChange}
                enterButton
                suffix={
                    isAddToFavoritesVisible ? (
                        <HeartOutlined onClick={onSaveToFavoritesButtonClick} />
                    ) : (
                        ''
                    )
                }
            />
        </div>
    );
};

export default SearchComponent;

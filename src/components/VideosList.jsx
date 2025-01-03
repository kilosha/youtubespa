import { List, Image } from 'antd';
import React, { useState } from 'react';
import { Skeleton } from 'antd';

const VideosList = ({ data, loading }) => {
    //const [items, setItems] = useState(data);
    return (
        <div>
            <List
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Skeleton loading={loading} active avatar>
                            <List.Item.Meta
                                avatar={<Image src={item.picture} width={200} />}
                                title={
                                    <a
                                        href={`https://www.youtube.com/watch?v=${item.id}`}
                                        target="_blank">
                                        {item.title}
                                    </a>
                                }
                                description={item.description}
                            />
                        </Skeleton>
                        {/* <List.Item.Meta
                            avatar={<Image src={item.picture} width={200} />}
                            title={
                                <a
                                    href={`https://www.youtube.com/watch?v=${item.id}`}
                                    target="_blank">
                                    {item.title}
                                </a>
                            }
                            description={item.description}
                        /> */}
                    </List.Item>
                )}
            />
        </div>
    );
};

export default VideosList;

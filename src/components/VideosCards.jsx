import { Card } from 'antd';
const { Meta } = Card;

const VideosCards = ({ data }) => {
    const gridStyle = {
        // width: '35%',
        // margin: '10px',
        textAlign: 'center',
        overflow: 'hidden'
    };

    return (
        <div>
            <Card>
                {data.map((item) => {
                    return (
                        <Card.Grid style={gridStyle} key={item.id}>
                            <Card cover={<img alt="example" src={item.picture} />}>
                                <Meta
                                    title={
                                        <a
                                            href={`https://www.youtube.com/watch?v=${item.id}`}
                                            target="_blank">
                                            {item.title}
                                        </a>
                                    }
                                    description={item.description}
                                />
                            </Card>
                        </Card.Grid>
                    );
                })}
            </Card>
        </div>
    );
};

export default VideosCards;

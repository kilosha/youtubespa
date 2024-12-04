import { Card } from 'antd';
const { Meta } = Card;

const VideosCards = ({ data }) => {
    const gridStyle = {
        width: '25%',
        textAlign: 'center'
    };

    return (
        <div>
            <Card>
                {data.map((item) => {
                    return (
                        <Card.Grid style={gridStyle} key={item.id}>
                            <Card
                                // style={{
                                //     width: 300
                                // }}
                                cover={<img alt="example" src={item.picture} />}>
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

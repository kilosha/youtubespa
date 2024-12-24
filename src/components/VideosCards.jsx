import { Card, Col, Row } from 'antd';
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
            <Row gutter={16}>
                {data.map((item) => {
                    return (
                        <Col span={5}>
                             <Card cover={<img alt="example" src={item.picture} style={{width: '40px'}}/>}>
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
                        </Col>
                        // <Card.Grid style={gridStyle} key={item.id}>
                            // <Card cover={<img alt="example" src={item.picture} />}>
                            //     <Meta
                            //         title={
                            //             <a
                            //                 href={`https://www.youtube.com/watch?v=${item.id}`}
                            //                 target="_blank">
                            //                 {item.title}
                            //             </a>
                            //         }
                            //         description={item.description}
                            //     />
                            // </Card>
                        // </Card.Grid>
                    );
                })}

                {/* <Col span={8}>
                    <Card title="Card title" bordered={false} >
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col> */}
            </Row>

            {/* <Card>
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
            </Card> */}
        </div>
    );
};

export default VideosCards;

import React from "react";
import { Card, Row, Col, Empty, Spin } from 'antd';
import PubSub from "pubsub-js";
import './index.css'

export default function MyHeader(props) {
    const { Meta } = Card;

    const userList = props.userList

    const [loading, setLoading] = React.useState(false)

    /**
     * 这里在 React.useEffect 处理消息发布订阅是不推荐的，这里仅作消息功能演示使用
     * 详情参考：https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect
     */
    let token = null;
    React.useEffect(() => {
        token = PubSub.subscribe('loadingStatusChannel', (_, flag) => setLoading(flag))
        return () => PubSub.unsubscribe(token)
    }, [token])

    return (
        <div id="content-container">
            <Spin spinning={loading}>
                {
                    userList.length === 0
                        ? <Empty style={{ margin: '50px 0' }} />
                        : <Row justify="space-between">
                            {
                                userList.map(item => {
                                    return (
                                        <Col key={item.id} span={4} style={{ padding: '10px' }}>
                                            <Card hoverable cover={<img alt="example" src={item.avatar_url} />}>
                                                <Meta title={item.login} description={item.html_url} />
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                }
            </Spin>

        </div>
    )
}
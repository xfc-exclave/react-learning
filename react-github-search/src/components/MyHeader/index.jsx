import React from "react";
import axios from "axios";
import { Row, Col, Input } from 'antd';
import PubSub from "pubsub-js";
import './index.css'

export default function MyHeader(props) {
    const { Search } = Input;

    const [loading, setLoading] = React.useState(false)
    const [value, setValue] = React.useState('')

    const searchHandler = value => {
        setValue('')
        loadingHandler(true)
        axios.get(`/api/search/users?q=${value}`).then(
            response => props.userListHandler(response.data.items),
            error => console.log('error---------', error)
        ).finally(() => loadingHandler(false))
    }

    const inputChange = e => setValue(e.target.value)

    const loadingHandler = flag => {
        setLoading(flag)
        PubSub.publish('loadingStatusChannel', flag)
    }

    return (
        <div>
            <h3>Github 用户检索</h3>
            <Row justify="space-between">
                <Col span={24}>
                    <Search placeholder="请输入需要检索的用户名" value={value} onChange={inputChange} onSearch={searchHandler} enterButton="检索" loading={loading} />
                </Col>
            </Row>
        </div>
    )
}
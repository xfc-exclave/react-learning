import React from "react";
import { Divider } from 'antd';
import MyHeader from "./components/MyHeader";
import MyBody from "./components/MyBody"
import './styles.css'

export default function App() {

    const [userList, setUserList] = React.useState([])
    const userListHandler = data => setUserList(data)

    return (
        <div className="content">
            <MyHeader userListHandler={userListHandler} />
            <Divider orientation="left">Github 用户检索结果</Divider>
            <MyBody userList={userList} />
        </div>
    );
}

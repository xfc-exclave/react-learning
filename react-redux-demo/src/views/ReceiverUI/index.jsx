import React from 'react'
import { Button, Table } from "antd";
import { nanoid } from 'nanoid';

export default function ReceiverUI(props) {

  const addReceiver = () => {
    const receiver = {
      key: nanoid(),
      name: 'Dovin',
      age: 25,
      gender: '女'
    }
    props.addReceiver(receiver)
  }

  const productCount = props.data.productReducer.length

  const columns = [
    {
      title: '顾客姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
    },
  ];

  return (
    <div style={{ width: '60%', maxWidth: '1200px', minWidth: '800px', margin: '0 auto', padding: '20px', background: '#fafafa' }}>
      <div style={{ marginBottom: '20px', fontWeight: 'bold' }}>当前商品总数为：{productCount}</div>
      <Button onClick={addReceiver}>添加收货人（同步）</Button>
      <Table dataSource={props.data.receiverReducer} columns={columns} />
    </div>
  )
}

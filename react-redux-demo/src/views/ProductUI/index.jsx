import React from 'react'
import { Button, Table } from "antd";
import { nanoid } from 'nanoid';

export default function ProductUI(props) {

  console.log('流程标记 ============> @TableUI - 通过 props 获取到 state', props.propsState)

  const addProductHandler = () => {
    console.log('流程标记 ============> @TableUI - UI 组件产生行为，并调用容器组件相关方法')
    const product = {
      key: nanoid(),
      name: '好利来虎皮卷',
      price: '25.75',
      address: '广东深圳'
    }
    props.addProductAsync(product)
  }

  const receiverCount = props.propsState.receiverReducer.length

  const columns = [
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '发货城市',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <div style={{ width: '60%', maxWidth: '1200px', minWidth: '800px', margin: '0 auto', padding: '20px', background: '#fafafa' }}>
      <div style={{marginBottom: '20px', fontWeight: 'bold'}}>当前收货人总数为：{receiverCount}</div>
      <Button onClick={addProductHandler}>添加商品（异步）</Button>
      <Table dataSource={props.propsState.productReducer} columns={columns} />
    </div>
  )
}
import React from 'react';
import { Layout, Menu, Row, Col, Avatar, Dropdown, Space } from 'antd';
import {
    HomeOutlined,
    AppstoreOutlined,
    MenuUnfoldOutlined,
    ShoppingOutlined
} from '@ant-design/icons';
import { NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import MyDashboard from './components/MyDashboard'
import MyApplications from './components/MyApplications'
import MyProducts from './components/MyProducts'
import './index.css'

const { Header, Content, Footer, Sider } = Layout;

export default function MyLayout(props) {

    const items = [
        {
            key: 'dashboard',
            label: <NavLink to='/'>首页</NavLink>,
            icon: <HomeOutlined />
        },
        {
            key: 'applications',
            label: <NavLink to='/applications'>应用管理</NavLink>,
            icon: <AppstoreOutlined />
        },
        {
            key: 'products-menu',
            label: '店铺管理',
            icon: <ShoppingOutlined />,
            children: [
                {
                    key: 'products',
                    label: <NavLink to='/products'>商品管理</NavLink>
                }
            ]
        }
    ]

    const { pathname } = useLocation()
    const curItem = items.filter(item => item.label.props !== undefined && item.label.props.to === pathname)[0]
    const selectedKeys = [curItem == null || curItem.length === 0 ? '/' : curItem.key]

    return (
        <Layout>
            <Sider trigger={null} collapsible style={{ height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']} selectedKeys={selectedKeys} items={items}></Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: '0 25px' }}>
                    <Row>
                        <Col flex="25px">
                            <MenuUnfoldOutlined style={{ fontSize: '20px' }} />
                        </Col>
                        <Col flex="auto" style={{ textAlign: 'right' }}>
                            <Dropdown overlay={
                                <Menu items={[{ label: "Profile Center" }, { label: "Account" }, { label: "Language" }]} />
                            }>
                                <Space style={{ marginLeft: '10px' }}>
                                    <Avatar shape="square" size={24} src="https://joeschmoe.io/api/v1/random" />
                                    <a href='/' onClick={e => e.preventDefault()}>Somebody</a>
                                </Space>
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                    <Routes>
                        <Route path='/' element={<MyDashboard />} />
                        <Route path='/applications' element={<MyApplications />} />
                        <Route path='/products' element={<MyProducts />} />
                        <Route path='*' element={<Navigate to="/" />} />
                    </Routes>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
};
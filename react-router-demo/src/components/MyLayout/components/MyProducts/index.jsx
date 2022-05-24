import { Breadcrumb } from 'antd';

export default function MyProducts(props) {
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>店铺管理</Breadcrumb.Item>
                <Breadcrumb.Item>商品管理</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: '400px' }}>
                MyProducts
            </div>
        </div>
    )
}
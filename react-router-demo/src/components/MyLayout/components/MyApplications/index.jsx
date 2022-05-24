
import { Breadcrumb } from 'antd';

export default function MyApplications(props) {
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>应用管理</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: '400px' }}>
                myapplications
            </div>
        </div>
    )
}
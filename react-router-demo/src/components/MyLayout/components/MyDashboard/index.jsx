import DemoChart from './../DemoChart'

export default function MyDashboard(props) {
    return (
        <div>
            <div className="site-layout-background" style={{ padding: 24, marginTop: '20px', minHeight: '400px' }}>
                <p>早上好，<a href="/">Somebody</a>！欢迎登录 XXX 管理系统。</p>
                <h3>商品营销信息概览：</h3>
                <div style={{marginTop: '20px'}}>
                    <DemoChart></DemoChart>
                </div>
            </div>
        </div>
    )
}
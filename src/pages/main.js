import React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd';
import CommonAside from '../components/commonAside';
import CommonHeader from '../components/commonHeader';
import { useSelector } from 'react-redux'


const { Content } = Layout;


const Main = () => {
    // const [collapsed, setCollapsed] = useState(false);

    // 获取展开收起的状态
    const collapse = useSelector(state => state.tab.isCollapse)

    return (
        <Layout className='main-container'>
            <CommonAside collapsed={collapse}></CommonAside>
            <Layout className="site-layout">
                <CommonHeader collapsed={collapse} />
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: '100vh',
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};
export default Main;
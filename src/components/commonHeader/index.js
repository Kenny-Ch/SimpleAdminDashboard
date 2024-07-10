import React  from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout } from 'antd';
import './index.css'
import { useDispatch } from 'react-redux'
import { CollapseMenu } from "../../store/reducers/tab";

const { Header } = Layout;



const CommonHeader = ({ collapsed }) => {
    const logout = () => {

    }

    const items = [
        {
            key: '1',
            label: (
                <p target="_blank" rel="noopener noreferrer">
                    个人中心
                </p>
            ),
        },
        {
            key: '2',
            label: (
                <p onClick={() => logout} target="_blank" rel="noopener noreferrer">
                    退出
                </p>
            ),

        },
    ];
    const dispatch = useDispatch()


    const setCollapsed = () => {
        console.log(collapsed)
        dispatch(CollapseMenu())
    }
    return (
        <Header className="header-container">
            {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
            })} */}
            <Button
                type="text"
                icon={!collapsed?<MenuFoldOutlined />:<MenuUnfoldOutlined/>}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: '#fff'
                }}
                onClick={() => { setCollapsed() }}
            ></Button>
            <Dropdown menu={{ items }}>
                <Avatar src={<img size={36} src={require("../../assets/images/user.png")} alt=""></img>}></Avatar>
            </Dropdown>

        </Header>
    )
}

export default CommonHeader
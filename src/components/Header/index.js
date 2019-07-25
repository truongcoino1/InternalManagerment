import React from 'react';

import 'antd/dist/antd.css';
import './index.scss';
import headerLogo from '../../assets/itleadpro.png';

import { Row, Col, Icon, Menu } from 'antd';

const { SubMenu } = Menu;
export class Header extends React.Component{
    render(){
        return(
            <div className='header-bar'>
                <Row className='format'>
                    <Col md={12} className='logo'>
                        <img src={headerLogo} />
                    </Col>
                    <Col md={12} className='left-menu'>
                        <Menu mode="horizontal">
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">
                                        <Icon type="calendar" />
                                        </span>
                                }
                            >
                                <Menu.Item>Attendance</Menu.Item>
                                <Menu.Item>Create a day-off</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">
                                        <Icon type="mail" />
                                        </span>
                                }
                            >

                            </SubMenu>
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">
                                        <Icon type="user" />
                                        </span>
                                }
                            >
                                <Menu.Item>
                                    <a href='/profile'>Profile</a>
                                </Menu.Item>
                                <Menu.Item>Days-off list</Menu.Item>
                                <Menu.Item>Log out</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </div>
            
        );
    }
}
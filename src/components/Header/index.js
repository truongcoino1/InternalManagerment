import React from 'react';
import './index.scss';
import headerLogo from '../../assets/itleadpro.png';
import { openModal } from '../Attendance/index';

import { Row, Col, Icon, Menu, Badge } from 'antd';

const { SubMenu } = Menu;
export class Header extends React.Component {

    showModal = () => {
        openModal();
    };

    render() {
        return (
            <div className='header-bar'>
                <Row className='format'>
                    <Col xs={24} md={12} className='logo'>
                        <a href="/home"><img src={headerLogo} /></a>
                    </Col>
                    <Col xs={24} md={12} className='left-menu'>
                        <Menu mode="horizontal">
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">
                                        <Icon type="calendar" />
                                    </span>
                                }
                            >
                                <Menu.Item onClick={this.showModal}>Attendance</Menu.Item>
                                <Menu.Item>Create a day-off</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">
                                        <Badge count={1}>
                                            <Icon type="mail" />
                                        </Badge>
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
                                <Menu.Item><a href="/login">Log out</a></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </div>

        );
    }
}
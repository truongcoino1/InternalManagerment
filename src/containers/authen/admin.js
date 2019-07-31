import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Menu, Icon, Switch } from 'antd';

import Layout from '../../common/layout';
import { EmployeeMng } from '../../components/EmployeeMng/index';
import { AttendanceMng } from '../../components/AttendanceMng/index';
import { LeaveSchedule } from '../../components/LeaveSchedule/index';

import './admin.scss';

const { SubMenu } = Menu;

class Admin extends Component {
    state = {
        mode: 'inline',
        theme: 'light',
        isShowEmployeeMng: true,
        isShowAttendanceMng: false,
        isShowLeaveSchedule: false,
      };
    
      changeMode = value => {
        this.setState({
          mode: value ? 'vertical' : 'inline',
        });
      };
    
      changeTheme = value => {
        this.setState({
          theme: value ? 'dark' : 'light',
        });
      };

    showEmployeeMng = () => {
          this.setState({
            isShowEmployeeMng: true,
            isShowAttendanceMng: false,
            isShowLeaveSchedule: false,
          })
      }

    showAttendanceMng = () => {
        this.setState({
          isShowEmployeeMng: false,
          isShowAttendanceMng: true,
          isShowLeaveSchedule: false,
        })
    }
    showLeaveSchedule = () => {
        this.setState({
           isShowEmployeeMng: false,
            isShowAttendanceMng: false,
            isShowLeaveSchedule: true,
        })
    }
    
    render() {
        const { isShowAttendanceMng, isShowEmployeeMng, isShowLeaveSchedule } = this.state;
        return (
            <Layout>
                <div className="employee-mng">
                    <div className="row">
                        <div className="col-left">
                            <Menu
                                style={{ width: '100%' }}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode={this.state.mode}
                                theme={this.state.theme}
                                >
                                <Menu.Item key="1">
                                    <span onClick={this.showEmployeeMng}>Employee Management</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <span onClick={this.showAttendanceMng}>Attendance Management</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <span onClick={this.showLeaveSchedule}>Employee leave shedule</span>
                                </Menu.Item>
                            </Menu>
                        </div>
                        <div className="col-right">
                            { isShowEmployeeMng ? <EmployeeMng /> : isShowAttendanceMng ? <AttendanceMng /> : <LeaveSchedule />}
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Admin;
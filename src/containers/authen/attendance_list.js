
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Icon, Button, notification } from 'antd';
import Layout from '../../common/layout';
import { openModal } from '../../containers/authen/attendance_request';

export class AttendanceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            visible: false,
            data: [
                { key: '1', date: '01/01/2019', 'Check-in': '9:00:00', 'Check-out': '18:00:00', 'Total': '8' },
                { key: '2', date: '02/01/2019', 'Check-in': '9:05:00', 'Check-out': '18:30:00', 'Total': '8.1' },
                { key: '3', date: '03/01/2019', 'Check-in': '9:10:00', 'Check-out': '18:05:00', 'Total': '8.2' },
                { key: '4', date: '04/01/2019', 'Check-in': '9:16:00', 'Check-out': '18:16:00', 'Total': '8.25' },
                { key: '5', date: '05/01/2019', 'Check-in': '9:19:00', 'Check-out': '18:21:00', 'Total': '8.15' },
                { key: '6', date: '01/01/2019', 'Check-in': '9:00:00', 'Check-out': '18:00:00', 'Total': '8' },
                { key: '7', date: '02/01/2019', 'Check-in': '9:05:00', 'Check-out': '18:30:00', 'Total': '8.1' },
                { key: '8', date: '03/01/2019', 'Check-in': '9:10:00', 'Check-out': '18:05:00', 'Total': '8.2' },
                { key: '9', date: '04/01/2019', 'Check-in': '9:16:00', 'Check-out': '18:16:00', 'Total': '8.25' },
                { key: '10', date: '05/01/2019', 'Check-in': '9:19:00', 'Check-out': '18:21:00', 'Total': '8.15' },
                { key: '11', date: '01/01/2019', 'Check-in': '9:00:00', 'Check-out': '18:00:00', 'Total': '8' },
                { key: '12', date: '02/01/2019', 'Check-in': '9:05:00', 'Check-out': '18:30:00', 'Total': '8.1' },
                { key: '13', date: '03/01/2019', 'Check-in': '9:10:00', 'Check-out': '18:05:00', 'Total': '8.2' },
                { key: '14', date: '04/01/2019', 'Check-in': '9:16:00', 'Check-out': '18:16:00', 'Total': '8.25' },
                { key: '15', date: '05/01/2019', 'Check-in': '9:19:00', 'Check-out': '18:21:00', 'Total': '8.15' },
            ],
        }
    };

    showModal = () => {
        openModal();
    };

    render() {
        const {
            data,
        } = this.state;

        const columns = [
            {
                title: 'No',
                dataIndex: 'key',

            },
            {
                title: 'Date',
                dataIndex: 'date',
                defaultSortOrder: 'descend',
                sorter: (a, b) => {
                    a = new Date(a.date);
                    b = new Date(b.date);
                    return b > a ? 1 : -1;
                }
            },
            {
                title: 'Check-in',
                dataIndex: 'Check-in',
            },
            {
                title: 'Check-out',
                dataIndex: 'Check-out',
            },
            {
                title: 'Total(hours)',
                dataIndex: 'Total',
                sorter: (a, b) => a.Total - b.Total,
                defaultSortOrder: 'descend',
            },
            {
                title: 'Request',
                width: '12%',
                render: (text, record) => {
                    return (
                        <div>
                            <Button
                                onClick={() => this.showModal(record)}
                                icon="edit" />
                        </div>
                    );
                },

            }
        ];
        return (
            <Layout>
                <div className="attendance-list">
                    <div className="title" style={{
                        paddingTop: 30,
                        fontSize: 24,
                        paddingBottom: 30,
                        paddingLeft: 30,
                    }}>
                        <span>Attendance List</span>
                    </div>
                    <Table
                        bordered
                        style={{
                            zoom: 1,
                            paddingLeft: 20,
                            paddingRight: 20,
                        }}
                        className="table-container"
                        columns={columns}
                        dataSource={data}
                    />
                </div>
            </Layout>
        )
    }
}

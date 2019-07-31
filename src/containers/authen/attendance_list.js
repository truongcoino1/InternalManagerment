
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import Layout from '../../common/layout';

const columns = [
    {
        title: 'No',
        dataIndex: 'No',
       
    },
    {
        title: 'Date',
        dataIndex: 'Date',
        defaultSortOrder: 'descend',
        sorter: (a, b) => {
            a = new Date(a).getTime();
            b = new Date(b).getTime();
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
];


export class AttendanceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [
                { key: '1', No: '1', Date: '01/01/2019', 'Check-in': '9:00:00', 'Check-out': '18:00:00', 'Total': '8' },
                { key: '2', No: '2', Date: '02/01/2019', 'Check-in': '9:05:00', 'Check-out': '18:30:00', 'Total': '8.1' },
                { key: '3', No: '3', Date: '03/01/2019', 'Check-in': '9:10:00', 'Check-out': '18:05:00', 'Total': '8.2' },
                { key: '4', No: '4', Date: '04/01/2019', 'Check-in': '9:16:00', 'Check-out': '18:16:00', 'Total': '8.25' },
                { key: '5', No: '5', Date: '05/01/2019', 'Check-in': '9:19:00', 'Check-out': '18:21:00', 'Total': '8.15' },
                { key: '6', No: '6', Date: '01/01/2019', 'Check-in': '9:00:00', 'Check-out': '18:00:00', 'Total': '8' },
                { key: '7', No: '7', Date: '02/01/2019', 'Check-in': '9:05:00', 'Check-out': '18:30:00', 'Total': '8.1' },
                { key: '8', No: '8', Date: '03/01/2019', 'Check-in': '9:10:00', 'Check-out': '18:05:00', 'Total': '8.2' },
                { key: '9', No: '9', Date: '04/01/2019', 'Check-in': '9:16:00', 'Check-out': '18:16:00', 'Total': '8.25' },
                { key: '10', No: '10', Date: '05/01/2019', 'Check-in': '9:19:00', 'Check-out': '18:21:00', 'Total': '8.15' },
                { key: '11', No: '11', Date: '01/01/2019', 'Check-in': '9:00:00', 'Check-out': '18:00:00', 'Total': '8' },
                { key: '12', No: '12', Date: '02/01/2019', 'Check-in': '9:05:00', 'Check-out': '18:30:00', 'Total': '8.1' },
                { key: '13', No: '13', Date: '03/01/2019', 'Check-in': '9:10:00', 'Check-out': '18:05:00', 'Total': '8.2' },
                { key: '14', No: '14', Date: '04/01/2019', 'Check-in': '9:16:00', 'Check-out': '18:16:00', 'Total': '8.25' },
                { key: '15', No: '15', Date: '05/01/2019', 'Check-in': '9:19:00', 'Check-out': '18:21:00', 'Total': '8.15' },
            ],
        }
    };

    render() {
        const {
            data,
        } = this.state;
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

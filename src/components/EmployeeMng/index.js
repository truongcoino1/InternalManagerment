import React from 'react';
import { Table, Input } from 'antd';

import './index.scss';

const { Search } = Input;
const columns = [
    {
        title: 'No.',
        dataIndex: 'key',
    },
    {
        title: 'ID',
        dataIndex: 'id'
    },
    {
        title: 'Full name',
        dataIndex: 'fullName',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.fullName.length - b.fullName.length,
    },
    {
        title: 'Date of birth',
        dataIndex: 'dateOfBirth',
        defaultSortOrder: 'descend',
        sorter: (a, b) => {
            a = new Date(a).getTime();
            b = new Date(b).getTime();
            return b > a ? 1 : -1;
        }
    },
    {
        title: 'Phone number',
        dataIndex: 'phoneNumber',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Position',
        dataIndex: 'position',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: status => <div>
            {status ? 'Active' : 'Deactive'}
        </div>,
    }
]

export class EmployeeMng extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [
                { key: '1', id: 'EM001', fullName: 'Ahihi Ahehe', dateOfBirth: '01/01/2019', phoneNumber: '0978456321', email: 'ahihi@itleadpro.vn', position: 'Developer', status: true, },
                { key: '2', id: 'EM002', fullName: 'Ahihi a', dateOfBirth: '01/01/2019', phoneNumber: '0978456321', email: 'ahihi@itleadpro.vn', position: 'Developer', status: true, },
                { key: '3', id: 'EM003', fullName: 'Ahihi b', dateOfBirth: '01/01/2019', phoneNumber: '0978456321', email: 'ahihi@itleadpro.vn', position: 'Developer', status: false, },
                { key: '4', id: 'EM004', fullName: 'Ahihi w', dateOfBirth: '01/01/2019', phoneNumber: '0978456321', email: 'ahihi@itleadpro.vn', position: 'Developer', status: true, },
                { key: '5', id: 'EM005', fullName: 'Ahihi d', dateOfBirth: '01/01/2019', phoneNumber: '0978456321', email: 'ahihi@itleadpro.vn', position: 'Developer', status: true, },
                { key: '6', id: 'EM006', fullName: 'Ahihi e', dateOfBirth: '01/01/2019', phoneNumber: '0978456321', email: 'ahihi@itleadpro.vn', position: 'Developer', status: true, },
                { key: '7', id: 'EM007', fullName: 'Ahihi m', dateOfBirth: '01/01/2019', phoneNumber: '0978456321', email: 'ahihi@itleadpro.vn', position: 'Developer', status: false, },
                { key: '8', id: 'EM008', fullName: 'Ahihi g', dateOfBirth: '01/01/2019', phoneNumber: '0978456321', email: 'ahihi@itleadpro.vn', position: 'Developer', status: true, },
            ],
        }
    };

    render() {
        const { data } = this.state;
        return (
            <div className="employee-mng">
                <div className="title">
                    <div className="col-left">
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                        />
                    </div>
                    <div className="col-right">

                    </div>
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
        )
    }
}
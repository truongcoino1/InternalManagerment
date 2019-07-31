import React from 'react';
import moment from 'moment';

import './index.scss';
import { Modal } from '../modal/modal';

export class Attendance extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            today: moment().format('MMMM Do YYYY, h:mm a'),
            userName: 'Ahihi',
            isCheckin: false,
        }
    }

    componentDidMount(){
        this.intervalCheckTime = setInterval(() => this.getDatetime(), 30000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalCheckTime);
    }

    getDatetime = () => {
        this.setState({
            today: moment().format('MMMM Do YYYY, h:mm a'),
        });
    }

    handleCheckin = () => {
        this.setState({
            isCheckin: !this.state.isCheckin,
        })
    }

    render(){
        const { today, userName, isCheckin } = this.state;
        return (
            <div className="current-date">
                <div>
                    Welcome {userName},
                </div>
                <div>
                    { today }
                </div>
                <div className="modal-footer">
                    <button className="btn-checkin" onClick={this.handleCheckin}>
                        { !isCheckin ? 'Check - in' : 'Check - out' }
                    </button>
                </div>
            </div>
            
        )
    }
}

export const openModal =()=>{
    Modal.show({
        title: 'Attendance',
        content: <Attendance/>,
        onClose: () => {Modal.dismiss()},
        renderFooter: true,
    })
}
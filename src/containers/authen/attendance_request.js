import React from 'react';
import moment from 'moment';

import './attendance_request.scss';
import { Modal } from '../../components/modal/modal';
import { DatePicker, Input, Form, notification } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
    Modal.dismiss();
  };

export class Attendance extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            today: moment().format('MMMM Do YYYY, h:mm a'),
        }
    }

    getDatetime = () => {
        this.setState({
            today: moment().format('MMMM Do YYYY, h:mm a'),
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };

    render(){
        return (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                <Form.Item label="Date">
                    <DatePicker/>
                </Form.Item>
                <Form.Item label="Note">
                <TextArea />
              </Form.Item>                                     
            </Form>
            
        )
    }
}

export const openModal =()=>{
    Modal.show({
        title: 'Attendance Request',
        content: <Attendance/>,
        onClose: () => {Modal.dismiss()},
        onConfirm: () => {openNotificationWithIcon('success')},
        renderFooter: false,
        confirmText: 'Send',
        cancelText: 'Cancel',
    })
}
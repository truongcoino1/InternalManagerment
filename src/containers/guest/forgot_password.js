import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './login.scss';
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
const HeadImg = require('./../../../src/assets/itleadpro.png');
class Change extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const openNotification = type => {
            notification[type]({
                message: 'Change Password Successfully.',
                description:
                    'Done. You will be redirected to login screen now.',
                duration: 0,
            });
        };
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={HeadImg} width={230} />
                </div>
                <h1>Change Password</h1>
                <Form.Item>
                    <div className="label">Your email</div>
                    {getFieldDecorator('username', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your email'
                            },
                            {
                                type: 'email',
                                message: 'Invalid email'
                            }
                        ],
                    })(
                        <Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => openNotification('success')}>
                        Change Password
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
const WrapperChange = Form.create({ name: 'login' })(Change);


export default WrapperChange;

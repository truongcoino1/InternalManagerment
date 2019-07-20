import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './login.scss';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
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
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={HeadImg} width={230} />
                </div>
                <h1>Change Password</h1>
                <Form.Item >
                    <div className="label">New Password</div>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input password'
                            },
                            {
                                min: 6,
                                message: 'Password must be more than 6 characters'
                            },
                            {
                                //validator: this.validateToNextPassword,
                            }
                        ],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                        />,
                    )}
                </Form.Item>
                <Form.Item hasFeedback>
                    <div className="label">Confirm New Password
                </div>
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your password'
                            },
                            {
                                validator: this.compareToFirstPassword,
                            }
                        ],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" href="/login">
                        Change Password
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
const WrapperChange = Form.create({ name: 'login' })(Change);


export default WrapperChange;

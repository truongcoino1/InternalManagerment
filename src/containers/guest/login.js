import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import './login.scss';
import { validPassWord } from '../../utils/validation';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

const HeadImg = require('./../../../src/assets/itleadpro.png');
class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    validatePass = (rule, value, callback) => {
        if(value && value.length < 6){
            callback("Your password needs at least 6 characters");
        }else{
            callback();
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row className="wrapper">
                <Col xs={2} md={8}></Col>
                <Col xs={20} md={8}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img src={HeadImg}/>
                        </div>
                        <h1>Login </h1>
                        <Form.Item>
                            <div className="label">Your email</div>
                            {getFieldDecorator('username', {
                                rules: [{
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your email' }
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <div className="label">Password
                        </div>
                            {getFieldDecorator('password', {
                                rules: [
                                    { required: true, message: 'Please input your password' },
                                    {
                                        validator: this.validatePass,
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
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <span>or <a href="">contact admin for account.</a></span>
                            </div>
                        </Form.Item>
                    </Form>
                </Col>
                <Col xs={2} md={8}></Col>
            </Row>
        )
    }
}
const WrapperLogin = Form.create({ name: 'login' })(Login);


export default WrapperLogin;

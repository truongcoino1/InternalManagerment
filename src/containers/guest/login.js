import React, { Component } from 'react'
import { Button, Input } from 'antd';
import './login.scss'

export class Login extends Component {
    render () {
        return (
            <div className="container">
                <Button>
                    Login
                </Button>
                <Input/>
            </div>
        )
    }
}
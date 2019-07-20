import React from 'react';

import 'antd/dist/antd.css';
import './index.scss';
import headerLogo from '../../assets/itleadpro_logo_square.png';

import { Row, Col } from 'antd';

class Header extends React.Component{
    render(){
        return(
            <Row>
                <Col md={12}>
                    <img src={headerLogo} />
                </Col>
                <Col md={12}>

                </Col>
            </Row>
        );
    }
}

export default Header;
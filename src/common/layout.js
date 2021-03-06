import React from 'react';

import { Header } from '../components/Header/index';
import './layout.scss';

export default class Layout extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
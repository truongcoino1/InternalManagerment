import React from 'react';

import { Header } from '../components/Header/index';
import { Container } from '../components/Container/index';

export default class Layout extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Container>{this.props.children}</Container>
            </div>
        )
    }
}
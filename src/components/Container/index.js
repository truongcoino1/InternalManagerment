import React from 'react';

export class Container extends React.Component {
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}
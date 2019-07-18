import React, { Component } from "react";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import _ from "lodash";
 
 class PrivateRoute extends Component {
    render () {
        let {component: RouteComponent, ...otherProps} = this.props;
        console.log('this.props: ', this.props)
        return (
            <Route {...otherProps} render={props => (
                !_.isEmpty(this.props.auth) ? (
                    <RouteComponent {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}/>
                )
            )}/>
        )
    }
}

export default connect(
    (state) => ({auth: state.auth})
)(PrivateRoute);

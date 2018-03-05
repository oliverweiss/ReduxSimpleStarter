import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';


const mapStateToProps = (appState) => ({
    authenticated: appState.authenticated
});


export default (ComposedComponent) => {
    class Authentication extends Component {

        componentWillMount() {
            if (!this.props.authenticated) {
                this.props.router.replace("/");
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.props.router.replace("/");
            }
        }

        render() {
            if (this.props.authenticated) {
                return (<ComposedComponent { ...this.props } />);
            } else {
                return (
                    <div style={{color: 'transparent', textShadow: '0 0 8px #000'}}>
                        YOU SHOULD NEVER SEE THIS
                    </div>
                );
            };
        }
    }

    return connect(mapStateToProps)(withRouter(Authentication));
};


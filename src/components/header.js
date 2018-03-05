import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { authenticate } from '../actions/index';

class Header extends Component {

    authButton() {
        return this.props.authenticated ?
        (<button className="logout-button" onClick={() => this.props.authenticate(false)}>Log out</button>):
        (<button className="login-button" onClick={() => this.props.authenticate(true)}>Login</button>);
    }

    render() {
        return (
            <nav className="navbar navbar-light header-component">
                <ul className="nav navbar-nav">
                    <li className="navbar-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="navbar-item">
                        { this.authButton() }
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (appState) => ({ authenticated: appState.authenticated });


export default connect(mapStateToProps, ({ authenticate }))(Header);
import React, {Component} from 'react';

import Navbar from "../navbar";
import AccountsTable from "../accounts-table";

import './app.css';

import configData from '../../config.json'

/* global wialon */

function msg(msg) {
    console.log(msg);
}

class App extends Component {

    constructor() {
        super();
        this.state = {
            token: configData.token,
            baseUrl: configData.baseUrl,
            isAuthorized: false
        }
    }

    componentDidMount() {
        const token = this.state.token;
        const baseUrl = this.state.baseUrl
        wialon.core.Session.getInstance().initSession(baseUrl);
        wialon.core.Session.getInstance().loginToken(token, "",
            code => {
                if (code) {
                    msg(wialon.core.Errors.getErrorText(code));
                    return;
                }
                msg("Logged successfully");
                this.setState({isAuthorized: true});
            }
        );
    }

    render() {
        return (
            <div className=''>
                <Navbar/>
                <AccountsTable/>
            </div>
        );
    }

}

export default App;
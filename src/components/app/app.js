import React, {Component} from 'react';

import Navbar from "../navbar";
import AccountsTable from "../accounts-table";

import './app.css';

import configData from '../../config.json'

/* global wialon */


class Account {
    constructor(res, data) {
        this._id = res._id
        this.res = res
        this.data = data
    }
}


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: configData.token,
            baseUrl: configData.baseUrl,
            isAuthorized: false,
            accounts: []
        }
    }

    componentDidMount() {
        const token = this.state.token;
        const baseUrl = this.state.baseUrl
        wialon.core.Session.getInstance().initSession(baseUrl);
        wialon.core.Session.getInstance().loginToken(token, "",
            code => {
                if (code) {
                    console.log(wialon.core.Errors.getErrorText(code));
                    return;
                }
                console.log("Logged successfully");
                this.setState({isAuthorized: true});
                this.init()
            }
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {


    }

    init() {
        if (this.state.isAuthorized) {
            let sess = wialon.core.Session.getInstance()
            sess.loadLibrary("resourceAccounts")
            let flags = wialon.item.Item.dataFlag.base | wialon.item.Item.dataFlag.billingProps;
            sess.updateDataFlags(
                [{type: "type", data: "avl_resource", flags: flags, mode: 0}],
                (code) => {
                    if (code) {
                        console.log(wialon.core.Errors.getErrorText(code));
                        return;
                    }
                    console.log('Data flags updated')
                    let resources = sess.getItems("avl_resource");
                    let accounts = resources.filter((r) => r.$$user_accountId === r._id)
                    let accs = accounts.map(e => e._id)
                    sess.getAccountsData(accs, 1, (code, data) => {
                        if (code) {
                            console.log(wialon.core.Errors.getErrorText(code));
                            return;
                        }
                        let fullAccountsData = accounts.map((e) => {
                            return new Account(e, data[e._id])
                        })
                        console.log(fullAccountsData)
                        this.setState({ accounts: fullAccountsData })
                    })
                }
            );
        }
    }

    render() {
        const { accounts } = this.state;
        return (
            <div className=''>
                <Navbar />
                <AccountsTable accounts={accounts}/>
            </div>
        );
    }

}

export default App;
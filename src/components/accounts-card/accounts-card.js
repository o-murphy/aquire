import React, {Component} from 'react';

import './accounts-card.css';
import AccountsTable from "../accounts-table";


export default class AccountsCard extends Component {

    render() {
        return (
                <div className="accounts-card card text-white mb-3 bg-dark center-block">
                    <div className="card-header row">
                        <h2 className="text-white">AQUIRE TOOLS</h2>
                        <p>
                            for Monobank Aquiring
                        </p>
                    </div>
                    <div className="card-body">
                        <AccountsTable/>
                    </div>

                </div>
        );
    }
}
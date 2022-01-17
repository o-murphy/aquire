import React, {Component} from 'react';

import './accounts-table.css';
import AccountsTableRow from "../accounts-table-row";

/* global wialon */

export default class AccountsTable extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className=''>
                <table className="accounts-table table table-hover" id='basketOrder'>
                    <thead className='text-white'>
                    <tr className="table-primary">
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Days</th>
                        <th scope="col">Enabled</th>
                        <th scope="col">Units</th>
                        <th scope="col">Parent Acc</th>
                        <th scope="col">
                            <a>
                                <i className="btn btn-sm btn-info fa fa-refresh"/>
                            </a>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="basketOrder" id="basketOrder">
                    <AccountsTableRow/>
                    </tbody>
                </table>
            </div>
        );
    }
}
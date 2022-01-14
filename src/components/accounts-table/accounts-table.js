import React, {Component} from 'react';

import './accounts-table.css';
import AccountsTableRow from "../accounts-table-row";

export default class AccountsTable extends Component {

    render() {
        return (
            <div className='col-sm-12 mb-3 center-block'>
                <table className="accounts-table table-sm table-hover" id='basketOrder'>
                    <thead className='text-white'>
                    <tr className="table-primary">
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Sum</th>
                        <th scope="col">Icon</th>
                        <th scope="col">----</th>
                        <th scope="col">----</th>
                        <th scope="col">----</th>
                        <th scope="col">----</th>
                        <th scope="col">----</th>
                        <th scope="col">
                            <a>
                                <i className="btn btn-sm btn-success fa fa-plus"/>
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
import React, {Component} from 'react';

import './accounts-table-row.css'


export default class AccountsTableRow extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <tr className="table-secondary">
                <th scope="row">1</th>
                <td>6440</td>
                <td>tcservice</td>
                <td>0</td>
                <td>True</td>
                <td>707</td>
                <td>overseer_partner</td>
                <td>
                    <a>
                        <i className="btn btn-sm btn-info fa fa-refresh"/>
                    </a>
                </td>
            </tr>
        )
    }

}
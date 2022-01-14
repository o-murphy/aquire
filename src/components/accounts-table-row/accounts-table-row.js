import React, { Component } from 'react';

import './accounts-table-row.css'


export default class AccountsTableRow extends Component {


    render() {
        return (
            <tr className="table-primary">
                <th scope="row">#</th>
                <td>
                    <input type="" className="bo-name form-control form-control-sm"
                           aria-describedby="" placeholder="Name"/>
                </td>
                <td>
                    <input type="number" min="0.01" step="0.01"
                           className="bo-qty form-control form-control-sm"
                           aria-describedby="" placeholder="1"/>
                </td>
                <td>
                    <input type="number" min="0.01" step="0.01"
                           className="bo-amount form-control form-control-sm"
                           aria-describedby="" placeholder="100.00"/>
                </td>
                <td>
                    <input type="url" className="bo-icon form-control form-control-sm"
                           aria-describedby="" placeholder="Url"/>
                </td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>
                <td>----</td>

                <td>
                    <a><i className="btn btn-sm btn-danger fa fa-minus"/></a>
                </td>
    </tr>
        )
    }

}
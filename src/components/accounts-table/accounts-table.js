import React, { Component } from 'react';

import './accounts-table.css';

export default class AccountTable extends Component {

    render() {
        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    Luke Skywalker
                </li>
                <li className="list-group-item">
                    Darth Vader
                </li>
                <li className="list-group-item">
                    R2-D2
                </li>
            </ul>
        );
    }
}
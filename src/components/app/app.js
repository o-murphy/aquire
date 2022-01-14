import React, {Component} from 'react';

import Navbar from "../navbar";
import AccountsTable from "../accounts-table";

import './app.css';

class App extends Component {

    componentDidMount() {
        const scr = document.createElement("script");
        scr.async = true;
        scr.src = "https://hst-api.wialon.com/wsdk/script/wialon.js";
        scr.onload = () => this.scriptLoaded();

        document.head.appendChild(scr);
    }

    scriptLoaded() {
        
    }

    render() {
        return (
            <div className=''>
                <Navbar />
                <AccountsTable />
            </div>
        );
    }


};

export default App;
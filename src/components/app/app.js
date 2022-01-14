import React from 'react';

import Navbar from "../navbar";
import AccountsTable from "../accounts-table";

import './app.css';

const App = () => {
    return (
        <div className=''>
            <Navbar />
            <AccountsTable />
        </div>
    );
};

export default App;
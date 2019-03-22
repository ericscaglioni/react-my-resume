import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Home extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <h1>This is my Resumé!</h1>
            </div>
        );
    }
}

export default Home;
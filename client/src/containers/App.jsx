import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import ListView from '../components/ListView/ListView';
import DetailView from '../components/DetailView/DetailView';


class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            view: 'list'
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <ListView />
                <DetailView />
                <p>root App compiling properly</p>
            </div>
        )
    }
}

export default App;
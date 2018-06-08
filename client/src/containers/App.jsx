import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import ListView from '../components/ListView/ListView';
import DetailView from '../components/DetailView/DetailView';

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            view: 'list'
            // swatches: [
            //     {color: }
            // ]
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <p>This should appear the main area</p> 
                        {/* <Layout >
                            <ListView />
                            <DetailView />
                        </Layout > */}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
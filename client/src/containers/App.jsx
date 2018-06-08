import React, { Component } from 'react';
import colors from '../assets/colors';
import './App.css';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import ListView from '../components/ListView/ListView';
import DetailView from '../components/DetailView/DetailView';

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            view: 'list',
            primaryColors: colors.primary,
            shadeColors: colors.shades
        }
    }

    render() {
        // console.log('does app see its style sheet: ', classes.other);

        const cust = {
            display: "inline"
        }

        let view = (
            <ListView />
        )
        if (this.state.view === 'detail' ) {
            view = (
                <DetailView />
            )
        }

        return (
            <div>
                <h3 className="other">Testing Stylesheet</h3>
                <Header />
                <div className="container-fluid">
                    <div className="row justify-content-start my-row">
                        <div className="col-md-2 col-sm-4 col my-col">
                            <Sidebar />
                        </div>
                        <div className="col-md-10 col-sm-8 col my-col">
                            <Layout >
                                {view}
                            </Layout >
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import colors from '../assets/colors';
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
            shadeColors: colors.shades,
            page: 1,
            focalSwatch: null
        }
        this.paginationHandler = this.paginationHandler.bind(this);
        this.updateColors = this.updateColors.bind(this);
    }  

    paginationHandler (e) {
        this.setState({page: e.target.id}, this.updateColors)
    }

    updateColors () {
        let newPage = this.state.page;
        const startIndex = (newPage * 12) - 12;
        const stopIndex = startIndex + 12;
        const updatedColors = [...this.state.primaryColors];
        let j = 0;
        for ( let i =startIndex; i < stopIndex ; i ++ ) {
            updatedColors[j] = colors.primary[i];
            j++;
        }
        this.setState({
            primaryColors: updatedColors
        });
    }
    
    render() {
        const cust = {
            display: "inline"
        }

        let view = (
            <ListView 
                colors={this.state.primaryColors}
                pageSelect={this.paginationHandler}
                pageNum={this.state.page}
            />
        )
        if (this.state.view === 'detail' ) {
            view = (
                <DetailView 
                    shades={this.state.shadeColors}
                />
            )
        }

        return (
            <div className="tall">
                <Header />
                <div className="container-fluid full">
                    <div className="row justify-content-start my-row full">
                            <Sidebar />
                        <div className="col" id="colAdj">
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
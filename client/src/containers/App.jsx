import React, { Component } from 'react';
import axios from 'axios';
import colors from '../assets/colors';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import ListView from '../components/ListView/ListView';
import tinycolor from 'tinycolor2';
import DetailView from '../components/DetailView/DetailView';
import './App.css';

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            view: 'list',
            primaryColors: colors.loadColors,
            displayColors: colors.loadColors,
            shadeColors: [null, null, null, null, null],
            page: 1,
            focalSwatch: null
        }

        this.paginationHandler = this.paginationHandler.bind(this);
        this.pageChangeHandler = this.pageChangeHandler.bind(this);
        this.exitDetailHandler = this.exitDetailHandler.bind(this);
        this.swatchClickHandler = this.swatchClickHandler.bind(this);
        this.generateShades = this.generateShades.bind(this);
        this.randomColorHandler = this.randomColorHandler.bind(this);
        this.getColors = this.getColors.bind(this);
    };

    getColors () {
        axios.get('/colors')
        .then((colorObj) => {
            let colorData = [...this.state.primaryColors];
            for (var i = 0; i < colorObj.data.length; i++ ) {
                colorData[i] = colorObj.data[i];
            }
            this.setState({
                primaryColors: colorData
            });
        })
        .catch((err) => {
            console.log(`Err msg from get req to /colors: ${err}.`);
        })
    }

    componentDidMount() {
        this.getColors();
    }
    
    generateShades (hex) {
        let newShades = [...this.state.shadeColors];
        newShades[1] = tinycolor(this.state.focalSwatch).desaturate(25).toHexString();
        newShades[0] = tinycolor(newShades[1]).desaturate(25).toHexString();
        newShades[2] = this.state.focalSwatch;
        newShades[3] = tinycolor(this.state.focalSwatch).brighten(5).toHexString();
        newShades[4] = tinycolor(newShades[3]).brighten(5).toHexString();
        this.setState({shadeColors: newShades});
    };

    randomColorHandler () {
        let clr = tinycolor.random().toHexString();
        this.setState({focalSwatch: clr},
            () => {this.generateShades(clr)})
        this.setState({ view: 'detail'})
    }

    swatchClickHandler (e) {
        let clr = e.target.id;
        this.setState({focalSwatch: clr}, 
            ()=>{this.generateShades(clr)})
        this.setState({view: 'detail'})
    };

    paginationHandler (e) {
        this.setState({page: e.target.id}, this.pageChangeHandler)
    };

    exitDetailHandler () {
        this.setState({ view: 'list'})
    };

    pageChangeHandler () {
        let newPage = this.state.page;
        const startIndex = (newPage * 12) - 12;
        const stopIndex = startIndex + 12;
        const updatedColors = [...this.state.primaryColors];
        let j = 0;
        for ( let i =startIndex; i < stopIndex ; i ++ ) {
            updatedColors[j] = this.state.primaryColors[i];
            j++;
        }
        this.setState({
            displayColors: updatedColors
        });
    };
    
    render() {
        const cust = {
            display: "inline"
        }

        let view = (
            <ListView 
                click={this.swatchClickHandler}
                colors={this.state.displayColors}
                pageSelect={this.paginationHandler}
                pageNum={this.state.page}
            />
        )
        if (this.state.view === 'detail' ) {
            view = (
                <DetailView 
                    shades={this.state.shadeColors}
                    focal={this.state.focalSwatch}
                    clear={this.exitDetailHandler}
                />
            )
        }

        return (
            <div className="tall">
                <Header />
                <div className="container-fluid full">
                    <div className="row justify-content-start my-row tall">
                            <Sidebar 
                                randClick={this.randomColorHandler}
                            />
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
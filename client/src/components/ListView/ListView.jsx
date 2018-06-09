import React from 'react';
import './ListView.css';
import ListViewPage from './ListViewPage/ListViewPage';
import Pagination from './ListViewPage/Pagination/Pagination';

const listView = (props) =>  {
    console.log('props.colors', props.colors);
    return (
        <div className="listView-container">
            <div className="row stretch">
                <ListViewPage 
                    click={props.click}
                    colors={props.colors}
                />
            </div>
            <div className="row fit">
                <div className="col justify-content-around">
                    <Pagination 
                        pageSelect={props.pageSelect} 
                        pageNum={props.pageNum} 
                    />
                </div>
            </div>
        </div>
    )
}

export default listView;
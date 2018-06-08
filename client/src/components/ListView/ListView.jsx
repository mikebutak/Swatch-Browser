import React from 'react';
import './ListView.css';
import ListViewPage from './ListViewPage/ListViewPage';
import Pagination from './ListViewPage/Pagination/Pagination';

const listView = (props) =>  {
    return (
        <div className="full">
            <div className="row stretch">
                <ListViewPage 
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
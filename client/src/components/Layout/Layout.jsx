import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => {
    const cust = {
        display: "inline"
    }
    return (
        <Aux>
            <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2">
            {props.children}
            </main>
        </Aux>
    )
}

export default layout;
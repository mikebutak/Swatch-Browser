import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => {
    const cust = {
        display: "inline"
    }
    return (
        <Aux>
            {/* <main className="col full" > */}
            {props.children}
            {/* </main> */}
        </Aux>
    )
}

export default layout;
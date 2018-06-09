import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => {
    const cust = {
        display: "inline"
    }
    return (
        <Aux>
            {props.children}
        </Aux>
    )
}

export default layout;
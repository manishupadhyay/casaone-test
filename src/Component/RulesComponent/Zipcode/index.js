import React, { useState } from 'react';
import Label from '../../Label/index'

const Zipcode = (props) => {
    const {onchange, value, deleteComp} = props.options;
    const compName = "zipcode";
    const onchangeHandler = (changeObj) => {
        const {newValue} = changeObj;
        onchange({
            zipcode: {value: newValue}
        });
    }
    const deleteHandler = () => {

    }
    return (
        <React.Fragment>
        <Label type="number" labelText="Zipcode" name="zipcode" value={value} onchange={onchangeHandler}/>
        <span title="delete rule" className="cross" onClick={() => {deleteComp(compName)}}>X</span>
        </React.Fragment>
    )
}

export default Zipcode;
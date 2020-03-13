import React from 'react';
import Label from '../../Label/index';
import {useSelector} from 'react-redux';

const Age = (props) => {
    const {minAge, maxAge, onchange, deleteComp} = props.options;
    const compName = "age";
    const obj = {
        age: {
            minAge,
            maxAge
        }
    }

    const changeHandler = (changeObj) => {
        const {name, newValue} = changeObj;
        obj.age[name] = newValue
        onchange(obj);

    }
    return (
        <React.Fragment>
            <Label type="text" placeholder="start range" labelText="Min Age" name="minAge" value={minAge} onchange={changeHandler}/>
            <Label type="text" placeholder="end range" labelText="Max Age" name="maxAge" value={maxAge} onchange={changeHandler}/>
            <span title="delete rule" className="cross" onClick={() => {deleteComp(compName)}}>X</span>
        </React.Fragment>
    )
}

export default Age;
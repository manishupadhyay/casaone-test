import React, { useState } from 'react';
import uuid from 'uuid/v4';

const Dropdown = (props) => {
    const {name, value, onchange} = props;
    const [selectedValue, setSelectedValue] = useState(value);
    const onchangeHandler = (ev) => {
        const newValue = ev.currentTarget.value;
        const name = ev.currentTarget.name;
        setSelectedValue(newValue);
        onchange({name, newValue});
    }
    return (    
        <select onChange={onchangeHandler} value={selectedValue} name={name}>
            {props.list.map(value => {
                return <option value={value} key={uuid()}>{value}</option>
            })}
        </select>
    )
}

export default Dropdown;


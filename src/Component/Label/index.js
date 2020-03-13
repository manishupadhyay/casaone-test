import React, { useState } from 'react';

const Label = (props) => {
    const {type, name, value, placeholder, labelText, onchange} = props;
    const [inputValue, setInputValue] = useState(value);
    const onchangeHandler = (ev) => {
        const newValue = ev.target.value;
        const name = ev.target.name
        setInputValue(newValue);
        onchange({name, newValue});
    }
    return (
        <label>{labelText}
            <input type={type} 
            // placeholder={placeholder}
            onChange={onchangeHandler}
            name={name}
            value={inputValue}/>
        </label>
    )
}
export default Label
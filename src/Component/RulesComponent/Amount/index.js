import React from 'react';
import Dropdown from '../../Dropdown/index';
import Label from '../../Label/index';
import {useSelector} from 'react-redux';

const Amount = (props) => {
    const currencyList = useSelector(state => state.currencyList);
    const {selectedCurrency=currencyList[0], minValue, maxValue, onchange, deleteComp} = props.options;
    const compName = 'amount';
    const changeAmout = {
        amount: {
            minValue,
            maxValue,
            selectedCurrency
        }
    }

    const changeHandler = (changeObj) => {
        const {name, newValue} = changeObj;
        changeAmout.amount[name] = newValue;
        onchange(changeAmout);
    }
    return (
        <div>
            <Label type="number" placeholder="please enter min value" labelText="Min Value" name="minValue" value={minValue} onchange={changeHandler}/>
            <Label type="number" placeholder="please enter max value" labelText="Max Value" name="maxValue" value={maxValue} onchange={changeHandler}/>
            <Dropdown list={currencyList} onchange={changeHandler} value={selectedCurrency} name="selectedCurrency" />
            <span title="delete rule" className="cross" onClick={() => {deleteComp(compName)}}>X</span>
        </div>
    )
}

export default Amount;
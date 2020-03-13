import React from 'react';
import Amount from '../RulesComponent/Amount/index';
import Age from '../RulesComponent/Age/index';
import Pincode from '../RulesComponent/Zipcode/index'
import Dropdown from '../Dropdown/index';
import { useDispatch } from 'react-redux';
import { addRuleAction } from '../../actions/actions';
import { ruleComponentMap } from '../ruleComponentMapping';

/**
 * 
 * @param {index} props is required attribute where to add component
 */
const AddRule = (props) => {
    let rulesList = Object.keys(ruleComponentMap);
    let selectedComponent = rulesList[0];
    const dispatch = useDispatch();
    const {index = "root" } = props;
    const changeHandler = ({newValue}) => {
        selectedComponent = newValue;
    }
    const clickHandler = () => {
        var ruleObj = {};
        ruleObj[selectedComponent.toLowerCase()] = {};
        dispatch(addRuleAction(ruleObj, index));
    }
    return (
        <React.Fragment>
            <Dropdown list={rulesList} onchange={changeHandler} />
            <input type="submit" value="Add" onClick={clickHandler}/>
        </React.Fragment>
    )
}

export default AddRule;
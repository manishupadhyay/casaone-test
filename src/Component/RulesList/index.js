import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import RulesInfo from './RulesInfo';
import './style.css';

const RulesList = (props) => {
    const list = useSelector(state => state.rulesList);
    const dispatch = useDispatch();
    const onSave = () => {
        
        // dispatch(list);
    }
    const onchange = (changedRule) => {
        if (changedRule.index + 1 > list.length) {
            list.push(changedRule.payload);
        }
        else {
            list[index] = changedRule;
        }
    }

    return (
        <ul>
            {list.map((rulesObj, index) => {
                return (
                    <li className="rulesList" key={uuid()}>
                        <RulesInfo rules={rulesObj} change={onchange} index={index} />
                    </li>
                )
            })}
        </ul>
    )
    
}


export default RulesList;
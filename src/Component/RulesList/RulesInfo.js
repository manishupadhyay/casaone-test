import React from 'react';
import uuid from 'uuid/v4';
import { ruleComponentMap } from '../ruleComponentMapping';
import { useDispatch } from 'react-redux';
import cloneDeep from 'lodash.clonedeep';
import AddRule from '../AddRule';
import { updateRuleActions } from '../../actions/actions';

const RulesInfo = (props) => {
    const {rules, onchange, index} = props;
    const rulesKeyArr = Object.keys(rules);
    const dispatch = useDispatch();
    let changeRules = cloneDeep(rules);

    const changeHandler = (changeObj) => {
        console.log(changeObj);
        changeRules = Object.assign({}, changeRules, changeObj);
        console.log(changeRules);
    }

    const onSave = () => {
       dispatch(updateRuleActions(changeRules, index));
    }

    const deleteRule = (name) => {
        delete changeRules[name];
        dispatch(updateRuleActions(changeRules, index));
    }
    const getOptions = (obj) => {
        return Object.assign({}, obj, {onchange: changeHandler, deleteComp:deleteRule});;
    }

    return (
        <React.Fragment>
            {
                rulesKeyArr.map(key => {
                    return (
                        <div key={uuid()}>
                            {ruleComponentMap[key](getOptions(rules[key]))}
                        </div>
                    )
                })
            }
            <AddRule index={index} />
            <input type="submit" value="save" onClick={onSave} />
        </React.Fragment>
    )
}

export default RulesInfo;
import {actionList} from '../actions/actionList';
import cloneDeep from 'lodash.clonedeep';
import { localStorageKey } from '../config';

export const rootReducer = (state, action) => {
    const cloneState =  cloneDeep(state);

    if(action.type === actionList.addRule) {
        const {index, rule} = action.payload;

        if (action.payload.index == "root") {
            cloneState.rulesList.push(rule);
        }
        else {
            cloneState.rulesList[index] = Object.assign({}, cloneState.rulesList[index], rule);
        }
    }
    else if (action.type === actionList.updateRule) {
        const {index, rule} = action.payload;
        const rulesLength = 
        cloneState.rulesList[index] = rule;

        if(Object.keys(rule).length === 0) {
            cloneState.rulesList = [...cloneState.rulesList.slice(0, index), ...cloneState.rulesList.slice(index+1, cloneState.rulesList.length)]
        }
    }

    
    
    localStorage.setItem(localStorageKey, JSON.stringify(cloneState.rulesList))
    return cloneState;
}
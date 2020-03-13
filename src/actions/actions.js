import {actionList} from './actionList';

export const addRuleAction = (rule, index) => {

    return {
        type: actionList.addRule,
        payload: {
            rule,
            index
        }
    }
}
export const updateRuleActions = (rule, index) => {
    return {
        type: actionList.updateRule,
        payload: {
            rule,
            index
        }
    }
}


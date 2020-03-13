import React from 'react';
import Amount from "./RulesComponent/Amount";
import Age from "./RulesComponent/Age";
import Zipcode from "./RulesComponent/Zipcode";

export const ruleComponentMap = {
    amount: (options) => { return <Amount options={options}/>},
    age: (options) => {return <Age options={options}/>},
    zipcode: (options) => {return <Zipcode options={options}/>}
}
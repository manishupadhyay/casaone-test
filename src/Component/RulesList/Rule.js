import React from 'react';

const Rule = (props) => {
    return (
        <li key={uuid()}>
            <RulesInfo rules={rulesObj}/>
        </li>
    )
}

export default Rule;
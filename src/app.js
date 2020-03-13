import React from 'react';
import { store } from './store/index';
import { Provider } from 'react-redux';
import AddRule from './Component/AddRule/index';
import RulesList from './Component/RulesList';
import 'reset-css'
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render () {
        return(
            <Provider store={store}>
                <RulesList />
                <div>
                    <AddRule/> 
                </div>
                
            </Provider>
        )
    }
}

export default App;
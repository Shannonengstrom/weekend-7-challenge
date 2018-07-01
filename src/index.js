import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const questionsReducer = (state = [], action) => {
    if(action.type === 'ADD_q1'){    
        console.log('In questionsReducer', action);
        return action.payload;
    }
    return state;  
}

const storeInstance = createStore(
    combineReducers({
        questionsReducer
    }), 
    applyMiddleware(logger)
);


ReactDOM.render(< Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

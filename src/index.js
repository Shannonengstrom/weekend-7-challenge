import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const feedbackReducer = (state = [], action) => {
    if(action.type === 'ADD_q1'){    
        console.log('In feedbackReducer', action);
        return {...this.state, q1: action.payload};
    }
    if(action.type === 'ADD_q2'){    
        console.log('In feedbackReducer', action);
        return {...this.state, q2: action.payload};    
    }
    if(action.type === 'ADD_q3'){    
        console.log('In feedbackReducer', action);
        return {...this.state, q3: action.payload};    
    }
    if(action.type === 'ADD_q4'){    
        console.log('In feedbackReducer', action);
       return {...this.state, q4: action.payload};
    }
    return state;  
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }), 
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

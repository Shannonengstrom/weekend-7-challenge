import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux stuff
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// const initialState = {
//     q1 : 0, 
//     q2 : 0, 
//     q3 : 0, 
//     q4 : ''
// }


const feedbackReducer = (state = {}, action) => {
    // conditional
    if(action.type === 'ADD_q1'){    
        console.log('In feedbackReducer', action);
        return {...state, q1: action.payload};
    }
    if(action.type === 'ADD_q2'){    
        console.log('In feedbackReducer', action);
        return {...state, q2: action.payload};    
    }
    if(action.type === 'ADD_q3'){    
        console.log('In feedbackReducer', action);
        return {...state, q3: action.payload};    
    }
    if(action.type === 'ADD_q4'){    
        console.log('In feedbackReducer', action);
       return {...state, q4: action.payload};
    }
    if(action.type === 'RESET'){    
        console.log('In feedbackReducer', action);
       return action.payload;
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

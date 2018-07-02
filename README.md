## flow from input to redux 

1. on user input or selection, send action to reducer via an action type and action payload: 
<!-- sendFeedbackToRedux = () => {
        const body = this.state.q1;
        const action = {type: 'ADD_q1', payload: body}; -->

2. Dispatch action to reducer via redux
<!-- this.props.dispatch(action); -->

3. In reducer, if else statement will signal which action to take. Runs spread function to add new q1 input to state

<!-- const feedbackReducer = (state = {}, action) => {
    // conditional
    if(action.type === 'ADD_q1'){    
        console.log('In feedbackReducer', action);
        return {...state, q1: action.payload};
    } -->

4. Upon ready to send to server:  
   - pull out data in this.props.reduxStore.feedbackReducer
   - do axios.post to server and send data in reducer

<!-- sendFeedbackToServer = () => {
        const feedback = this.props.reduxStore.feedbackReducer
        console.log('in sendFeedbackToServer', feedback)
        axios.post('/api/feedback', feedback) -->
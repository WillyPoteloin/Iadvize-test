// Define initial state
const initialState = {
    messages: [],
}

// Reducer
const chat = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                messages: [
                    ...state.messages,
                    action.message
                ]
            }
            break;
        default:
            return state;

    }
}

export default chat;

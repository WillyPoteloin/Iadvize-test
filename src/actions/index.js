let messageId = 0;

export const addMessage = (message) => {

    message.id = messageId++;
    return {
        type: 'ADD_MESSAGE',
        message: message
    }
}

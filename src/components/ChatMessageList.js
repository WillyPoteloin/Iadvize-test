// Import libraries
import {connect} from 'react-redux';

// Import components
import MessageList from './MessageList';

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

const ChatMessageList = connect(
    mapStateToProps
)(MessageList);

export default ChatMessageList;

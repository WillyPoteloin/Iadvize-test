// Tests for Components
import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import App from '../src/components/App'
import Chat from '../src/components/Chat'
import ChatMessageList from '../src/components/ChatMessageList';
import MessageList from '../src/components/MessageList';
import ConnectedMessageForm, {MessageForm} from '../src/components/MessageForm';
import Message from '../src/components/Message';

// Setup for testing App component
function setupApp() {
    let props = {}

    let renderer = TestUtils.createRenderer();
    renderer.render(<App {...props} />);
    let output = renderer.getRenderOutput();

    return {
        props,
        renderer,
        output
    }
}

// Setup for testing Chat component
function setupChat() {
    let props = {
        name:'Chat 1',
        current_user: {
            name: 'John Doe',
            picture: 'johndoe.jpg'
        },
    }

    let renderer = TestUtils.createRenderer();
    renderer.render(<Chat {...props} />);
    let output = renderer.getRenderOutput();

    return {
        props,
        renderer,
        output
    }
}

// Setup for testing MessageList component
function setupMessageList() {
    let props = {
        messages: [
            {
                id: 0,
                user: {
                    name: 'John Doe',
                    picture: 'johndoe.jpg'
                },
                text: 'test',
                date: '1465332186'
            }
        ],
        current_user: {
            name: 'John Doe',
            picture: 'johndoe.jpg'
        }
    }

    let renderer = TestUtils.createRenderer();
    renderer.render(<MessageList {...props} />);
    let output = renderer.getRenderOutput();

    return {
        props,
        renderer,
        output
    }
}

// Setup for testing Message component
function setupMessage() {
    let props = {
        id: 0,
        text: 'test',
        date: '1465332186',
        user: {
            name: 'John Doe',
            picture: 'johndoe.jpg'
        },
        current_user: {
            name: 'John Doe',
            picture: 'johndoe.jpg'
        }
    }

    let renderer = TestUtils.createRenderer();
    renderer.render(<Message {...props} />);
    let output = renderer.getRenderOutput();

    return {
        props,
        renderer,
        output
    }
}

// Setup for testing MessageForm component
function setupMessageForm() {
    let props = {}

    let renderer = TestUtils.createRenderer();
    renderer.render(<MessageForm {...props} />);
    let output = renderer.getRenderOutput();

    return {
        props,
        renderer,
        output
    }
}

describe('Components', () => {
    describe('App', () => {
        it('Should render the App component', () => {
            const {output} = setupApp()

            expect(output.type).toBe('div')

            expect(output.props.children[0].type).toEqual(Chat);
            expect(output.props.children[0].props.name).toEqual('Chat 1');
            expect(output.props.children[0].props.current_user).toMatch({
                name: 'Kylo Ren',
            })

            expect(output.props.children[1].type).toEqual(Chat);
            expect(output.props.children[1].props.name).toEqual('Chat 2');
            expect(output.props.children[1].props.current_user).toMatch({
                name: 'Jabba le Hutt',
            })
        })
    })

    describe('Chat', () => {
        it('Should render the Chat component', () => {
            const {output} = setupChat()

            expect(output.type).toBe('div')
            expect(output.props.className).toBe('chat')

            expect(output.props.children[0]).toEqual(<h1>Chat 1</h1>);

            expect(output.props.children[1].type).toBe(ChatMessageList)
            expect(output.props.children[1].props.current_user).toEqual({
                name: 'John Doe',
                picture: 'johndoe.jpg'
            })
            expect(output.props.children[2].type).toBe(ConnectedMessageForm)
            expect(output.props.children[2].props.current_user).toEqual({
                name: 'John Doe',
                picture: 'johndoe.jpg'
            })
        })
    })

    describe('MessageList', () => {
        it('Should render the MessageList component', () => {
            const {output} = setupMessageList()

            expect(output.type).toBe('div')
            expect(output.props.className).toBe('chat-list')

            expect(output.props.children[0].type).toBe(Message)
            expect(output.props.children[0].props.current_user).toEqual({
                name: 'John Doe',
                picture: 'johndoe.jpg'
            })
        })
    })

    describe('Message', () => {
        it('Should render the Message component', () => {
            const {output, props} = setupMessage()

            expect(output.type).toBe('div')
            expect(output.props.className).toInclude('chat-message')
            expect(output.props.className).toInclude('mine')

            let [header, content, footer] = output.props.children

            expect(header.props.className).toBe('header')
            expect(content.props.className).toBe('content')
            expect(footer.props.className).toBe('footer')

        })
    })

    describe('MessageForm', () => {
        it('Should render the MessageForm component', () => {
            const {output, props} = setupMessageForm()

            expect(output.type).toBe('form')

            expect(output.props.children[0].type).toBe('input')
            expect(output.props.children[0].props.value).toBe('')
            expect(output.props.children[1]).toEqual(<input className="chat-form-submit" type="submit" value="Send"/>)
        })
    })
})

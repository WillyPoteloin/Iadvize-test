// Tests for Action Creators
import expect from 'expect';
import * as actions from '../src/actions'

describe('Actions', () => {
    describe('ADD_MESSAGE', () => {        
        it('Should create an action to add a message in the store', () => {
            const message = {
                text: 'test',
                user: {
                    name: 'John Doe',
                    picture: '/johndoe.jpg'
                },
                date: '1465332186'

            }

            message.id = 0;

            const expectedMessage = {
                type: 'ADD_MESSAGE',
                message: message
            }

            expect(actions.addMessage(message)).toEqual(expectedMessage);
        })
    })
})

// Tests for Reducers
import expect from 'expect';
import reducer from '../src/reducers/index.js'

describe('Reducers', () => {
    describe('Chat', () => {
        it('Should return the initial state in store', () => {
            const expectedState = {
                messages: []
            }

            expect(reducer(undefined, {})).toEqual(expectedState);
        })

        it('Should return the new state in store', () => {

            const initialState = {
                messages: []
            }


            const expectedState = {
                messages: [
                    {
                        id: 0,
                        text: 'test',
                        user: {
                            name: 'John Doe',
                            picture: '/johndoe.jpg'
                        },
                        date: '1465332186'
                    }
                ]
            }

            const action = {
                type: 'ADD_MESSAGE',
                message: {
                    id: 0,
                    text: 'test',
                    user: {
                        name: 'John Doe',
                        picture: '/johndoe.jpg'
                    },
                    date: '1465332186'
                }
            }

            expect(reducer(initialState, action)).toEqual(expectedState);

            const initialState2 = {
                messages: [
                    {
                        id: 0,
                        text: 'test',
                        user: {
                            name: 'John Doe',
                            picture: '/johndoe.jpg'
                        },
                        date: '1465332186'
                    }
                ]
            }


            const expectedState2 = {
                messages: [
                    {
                        id: 0,
                        text: 'test',
                        user: {
                            name: 'John Doe',
                            picture: '/johndoe.jpg'
                        },
                        date: '1465332186'
                    },
                    {
                        id: 1,
                        text: 'test 1',
                        user: {
                            name: 'Mr Dupont',
                            picture: '/dupont.png'
                        },
                        date: '1465332340'
                    }
                ]
            }

            const action2 = {
                type: 'ADD_MESSAGE',
                message: {
                    id: 1,
                    text: 'test 1',
                    user: {
                        name: 'Mr Dupont',
                        picture: '/dupont.png'
                    },
                    date: '1465332340'
                }
            }

            expect(reducer(initialState2, action2)).toEqual(expectedState2);
        });
    })
})

import '@testing-library/jest-dom'
import { loginReducer } from '../reducers/loginReducer'
import { types } from '../types/types';

describe('Pruebas de LoginReducer', () => {
    test('debe de realizar el login', () => {

        const initState = {};
        const action = {
            type: types.login,
            payload: {
                id: 'aaa',
                displayname: 'Demo'
            }
        }
        const state = loginReducer(initState, action);
        expect(state).toEqual({
            id: 'aaa',
            name: 'Demo'
        })
    })
})

test('Cerrar sesión - logout ', () => {
    const initState = {
        id:'aaa',
        name:'Demo'
    };

    const action = {
        type: types.logout,
    };

    const state = loginReducer( initState, action);
    expect (state).toEqual([])

})




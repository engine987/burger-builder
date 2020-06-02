import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
                token: null,
                userId: null,
                error: null,
                loading: null,
                authRedirectPath: '/'
        });
    });

    it('should store token upon login', () => {
        let initialState = {
            token: null,
            userId: null,
            error: null,
            loading: null,
            authRedirectPath: '/'
        };

        let loginPayload = {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-user-id'
        };

        expect(reducer(initialState, loginPayload)).toEqual({
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    });
});
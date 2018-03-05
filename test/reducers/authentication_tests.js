import authentication from "../../src/reducers/authentication";
import { expect } from "../test_helper";
import { authenticate } from "../../src/actions";

describe('AuthenticationReducer', () => {
    let state;

    beforeEach(() => {
        state = authentication(undefined, {});
    });

    it('has a default state', () => {
        expect(state).to.eql(false);
    });

    it('ignores UNKNOWN action', () => {
        const action = ({type: 'UNKNOWN', payload: null});
        const initialState = state;
        state = authentication(state, action);
        expect(state).to.eql(initialState);
    });

    it('applies CHANGE_AUTH action', () => {
        const action = authenticate(true);
        state = authentication(state, action);
        expect(state).to.eql(true);
    });
});
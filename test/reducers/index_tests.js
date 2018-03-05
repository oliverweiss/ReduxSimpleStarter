import rootReducer from "../../src/reducers";
import { expect } from "../test_helper";

describe('Reducers', () => {
    let state;

    beforeEach(() => {
        state = rootReducer(undefined, {});
    });

    it('should have an authenticated state by default', () => {
        expect(state.authenticated).to.exist;
    });

    

});
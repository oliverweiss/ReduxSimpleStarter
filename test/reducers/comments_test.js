import { saveComment } from '../../src/actions';
import { expect } from '../test_helper';
import commentReducer from "../../src/reducers/comments";

describe('CommentsReducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = commentReducer();
    });

    it('should ignore unhandled actions', () => {
        expect(initialState).to.eql([]);  // deep comparison.
    });

    it('SAVE_COMMENT', () => {
        const action = saveComment('a comment');
        const state = commentReducer(initialState,action);
        expect(state).to.eql(['a comment']);
    });
});

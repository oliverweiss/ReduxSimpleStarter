import { expect } from  '../test_helper';
import { saveComment } from '../../src/actions';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('actions', () => {
    describe('saveComment', () => {
        it('has the correct type', () => {
            const action = saveComment();
            expect(action.type).to.equals(SAVE_COMMENT);
        });

        it('has the correct payload', () => {
            const action = saveComment('a comment');
            expect(action.payload).to.equals('a comment');
        });
    });
});

import { expect, renderComponent } from "../test_helper";
import CommentList from "../../src/components/comment_list";

describe('CommentList', () => {
    let component;

    beforeEach(() => {
        const props = { comments: ['a comment', 'another comment', 'a third comment']};
        component = renderComponent(CommentList, null, props);
    });

    it('has a the correct class', () => {
        expect(component).to.have.class('comment-list');
    });


    it('shows an li for each comment', () => {
        expect(component.find('li').length).to.equal(3);
    });

    it('shows each comment that is provided', () =>  {
        expect(component).to.contain('a comment');
        expect(component).to.contain('another comment');
        expect(component).to.contain('a third comment');

    });
});
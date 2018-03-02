import { renderComponent, expect } from "../test_helper";
import CommentBox from "../../src/components/comment_box";


describe('CommentBox', () => {
    let component;

    beforeEach(() => {
        // renderComponent creates and jQuerify the React component
        component = renderComponent(CommentBox);
    });

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    it('has a the correct class', () => {
        expect(component).to.have.class('comment-box');
    });

    describe('entering some text',  () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'some text');
        });

        it('shows that text in the textarea', () => {
            expect(component.find('textarea')).to.have.value('some text');
        });

        it('clears the input when submitted', () => {
            component.simulate('submit');

            expect(component.find('textarea')).to.have.value('');
        });
    });



    // it('entering text updates the text', () => {

    // });
});
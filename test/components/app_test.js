import App from  '../../src/components/app';
import { expect, renderComponent } from '../test_helper';

// describe: Group tests for an app
// it: Test a single thing
// expect: Assert the result of a test

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });

});

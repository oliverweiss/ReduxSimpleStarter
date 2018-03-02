import App from  '../../src/components/app';
import { expect, renderComponent } from '../test_helper';

// describe: Group tests for an app
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  // it: Test a single thing
  it('shows the correct text', () => {
    // expect: Assert the result of a test
    expect(component).to.contain('React simple starter');
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

});

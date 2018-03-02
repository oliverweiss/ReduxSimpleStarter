import App from  '../../src/components/app';
import { expect, renderComponent } from '../test_helper';

// describe: Group tests for an app
describe('App', () => {
  
  // it: Test a single thing
  it('shows the correct text', () => {
    const component = renderComponent(App);

    // expect: Assert result of a test
    expect(component).to.contain('React simple starter');
  });

});

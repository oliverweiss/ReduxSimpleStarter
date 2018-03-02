import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai'; 
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// 1) Set up testing env to run like a browser in the cli.
// Create a fake DOM using jsdom, and put it in the global scope.
global.document = jsdom.jsdom('<!doctype html><head></head><body></body></html>');
global.window = global.document.defaultView;
// Bind jQuery to our fake DOM.
const $ = jquery(global.window);

// 2) Build 'renderComponent' that render the react class wrapped in a chai-jQuery object.
const renderComponent = (ComponentClass, props, state) => {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={ createStore(reducers, state) }>
      <ComponentClass { ...props }/>
    </Provider>
  );
  
  return $(ReactDOM.findDOMNode(componentInstance));
};

// Build helpers for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) { this.val(value); }
  TestUtils.Simulate[eventName](this[0]);
};

// Set up chai-jQuery.
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
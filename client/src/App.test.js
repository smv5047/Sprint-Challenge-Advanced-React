import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('checks that dark mode button is displayed correctly', () =>{
  const wrapper = rtl.render(<App/>)
  wrapper.debug(wrapper.queryByText('Dark Mode'))
  wrapper.debug(wrapper.queryByText('country'))
 

  const dark =wrapper.queryByText(/dark/i)
  expect(dark).toBeInTheDocument();
  expect(dark).toBeTruthy();
  expect(dark).toBeVisible();


})

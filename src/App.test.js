import { shallow } from 'enzyme';
import React from 'react';

import App from './App';

test('renders root App component without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

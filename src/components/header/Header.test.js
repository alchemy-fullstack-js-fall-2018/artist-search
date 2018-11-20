import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header Component', () => {
  it('should be a header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});

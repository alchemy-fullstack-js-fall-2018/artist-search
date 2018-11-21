import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Footer Component', () => {
  it('should be a footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});

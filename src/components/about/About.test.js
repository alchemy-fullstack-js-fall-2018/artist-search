import React from 'react';
import About from './About';
import { shallow } from 'enzyme';

describe('About Component', () => {
  it('should render about page', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});

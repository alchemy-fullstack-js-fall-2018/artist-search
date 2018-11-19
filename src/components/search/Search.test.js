import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('search', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search />);
  });
  it('renders an search component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search Component', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search/>);
  });

  it('renders component', () => {
    expect(wrapper).toMatchSnapshot();
  });

});

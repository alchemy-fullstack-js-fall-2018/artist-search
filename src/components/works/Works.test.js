import React from 'react';
import { shallow } from 'enzyme';
import Works from './Works';

describe('Works', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Works works={[{ id: "1234", title: "something" }]} name="bob" />);
  });

  it('renders an Works Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

});

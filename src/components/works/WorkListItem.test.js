import React from 'react';
import { shallow } from 'enzyme';
import WorkListItem from './WorkListItem';

describe ('tests for WorkListItem component', () => {
  const props = {
    artist: 'Joni Mitchell',
    title: 'Blue'
  };
  it('renders an WorkListItem component', () => {
    const wrapper = shallow(<WorkListItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

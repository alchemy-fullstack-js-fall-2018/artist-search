import React from 'react';
import { shallow } from 'enzyme';
import QueryArtists from './QueryArtists';

describe ('tests for QueryArtists component', () => {

  it('renders an QueryArtists component', () => {
    const result = {
      name: 'Joni Mitchell',
      type: 'Person',
      description: 'American folk singer',
      id: '12345'

    };
    const wrapper = shallow(<QueryArtists result={result}/>);
    expect(wrapper).toMatchSnapshot();
  });

});

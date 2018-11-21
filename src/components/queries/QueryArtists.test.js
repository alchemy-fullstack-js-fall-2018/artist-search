import React from 'react';
import { shallow } from 'enzyme';
import QueryArtists from './QueryArtists';

describe ('tests for QueryArtists component', () => {

  it('renders an QueryArtists component', () => {
    const onQueryItemChangeFn = jest.fn();
    const query = {
      name: 'Joni Mitchell'
    };
    const wrapper = shallow(
      <QueryArtists query={query}
        onQueryItemChange={onQueryItemChangeFn}
      />);
    expect(wrapper).toMatchSnapshot();
  });

});

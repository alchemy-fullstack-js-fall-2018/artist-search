import React from 'react';
import { shallow } from 'enzyme';
import Songs from './Songs';

describe('Songs Component', () => {

  let wrapper;
  beforeEach(() => {
    const artist = 'John Doe';
    const works = [{
      id: 'abcd1234',
      title: 'Rocking the Night Away'
    }];
    wrapper = shallow(
      <Songs
        artist={artist}
        works={works}
      />
    );
  });

  it('renders component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('displays artist and songs', () => {
  //   expect(wrapper.html()).toContain('John Doe');
  //   expect(wrapper.html()).toContain('Rocking the Night Away');
  // });

});

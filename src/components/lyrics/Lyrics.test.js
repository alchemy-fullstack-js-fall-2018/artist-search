import React from 'react';
import { shallow } from 'enzyme';

import Lyrics from './Lyrics';

describe('Lyrics Component', () => {

  let wrapper;
  const location = { pathname: '/lyrics/Metallica/Atlas, Rise!' };
  beforeEach(() => {
    wrapper = shallow(<Lyrics location={location} />);
  });

  it('renders component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contains lyrics', () => {
    expect(wrapper.html()).toContain('Metallica');
    expect(wrapper.html()).toContain('Atlas, Rise');
    expect(wrapper.html()).toContain('Bitterness and burden');
  });

});

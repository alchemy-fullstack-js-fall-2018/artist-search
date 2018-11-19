import React from 'react';
import Works from './Works';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('Work', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Works works={[]} />);
  });

  it('renders Works', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays song title', () => {
    const wrapperWithRouter = shallow(
      <MemoryRouter>
        <Works works={[{ id: '12',  title: 'a song' }]} />
      </MemoryRouter>
    );
    expect(wrapperWithRouter.html()).toContain('a song');
  });
});

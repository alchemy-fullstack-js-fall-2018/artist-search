import React from 'react';
import Artist from '../artist/Artist';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

describe('Artist', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Artist id="111" name="a cool band" description="gross" />);
  });


  it('renders a Artist', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays the name and description', () => {
    const wrapperWithRouter = shallow(
      <MemoryRouter>
        <Artist id="111" name="a cool band" description="gross" />
      </MemoryRouter>

    );
    expect(wrapperWithRouter.html()).toContain('gross');
    expect(wrapperWithRouter.html()).toContain('a cool band');
  });

  it('links to a artist detail', () => {
    expect(wrapper.find('Link').props().to).toEqual(ROUTES.ARTIST.linkTo(111));
  });
});

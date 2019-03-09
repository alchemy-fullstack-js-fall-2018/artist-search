import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';
import { MemoryRouter } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

describe('Artist', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Artist id="1234" name="Nirvana" description="blah" />);
  });

  it('renders an Artist Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays the name', () => {
    const wrapperWithRouter = shallow(
      <MemoryRouter>
        <Artist id="1234" name="Nirvana" />
      </MemoryRouter>
    );
    expect(wrapperWithRouter.html()).toContain('Nirvana');
  });

  it('links to a work by id', () => {
    expect(wrapper.find('Link').props().to).toEqual(
      ROUTES.ARTIST.linkTo('1234')
    );
  });
});

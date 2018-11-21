import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

describe('search', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Search />);
    });

    it('renders a search component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

import React from 'react';
import Paging from './Paging';
import { shallow, configure } from 'enzyme';
import { wrap } from 'module';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('paging component', () => {
  it('shows the current page', () => {
    const currentPage = 3;
    const wrapper = shallow(<Paging currentPage={currentPage} />);
    expect(wrapper.html()).toContain(currentPage);
  });

  it('shows the total pages', () => {
    const totalPages = 10;
    const wrapper = shallow(<Paging currentPage={1} totalPages={totalPages} />);
    expect(wrapper.html()).toContain(totalPages);
  });

  it('has a prev button', () => {
    const wrapper = shallow(<Paging currentPage={2} totalPages={5} />);
    expect(wrapper.find('button').at(0).text()).toEqual('Previous');
  });
});

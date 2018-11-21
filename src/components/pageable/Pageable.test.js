import React from 'react';
import Pageable from './Pageable';
import { shallow } from 'enzyme';

describe('Pageable', () => {

  it('renders a Pageable component', () => {
    const wrapper = shallow(<Pageable />);
    expect(wrapper).toMatchSnapshot();
  });

  it('decrements the currentPage when previous is clicked', () => {
    const updatePageFn = jest.fn();
    const wrapper = shallow(<Pageable currentPage={10}
      totalPages={10}
      updatePage={updatePageFn} />);

    wrapper.find('button').at(0).simulate('click');

    expect(updatePageFn.mock.calls[0][0]).toEqual(9);

  });

  it('increments the currentPage when next is clicked', () => {
    const updatePageFn = jest.fn();
    const wrapper = shallow(<Pageable currentPage={10}
      totalPages={20}
      updatePage={updatePageFn} />);

    wrapper.find('button').at(1).simulate('click');

    expect(updatePageFn.mock.calls[0][0]).toEqual(11);
  });

  it('the previous button is not displayed on the first page', () => {
    const wrapper = shallow(<Pageable currentPage={1}
      totalPages={20}
      updatePage={() => { }} />);

    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').at(0).text()).toEqual('Next');
  });

  it('the next button is not displayed on the last page', () => {
    const wrapper = shallow(<Pageable currentPage={20}
      totalPages={20}
      updatePage={() => { }} />);

    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').at(0).text()).toEqual('Previous');
  });
});

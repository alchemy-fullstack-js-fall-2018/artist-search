import React from 'react';
import Paging from './Paging';
import { shallow } from 'enzyme';

describe('Paging', () => {
  it('renders the Paging component', () => {
    const wrapper = shallow(<Paging currentPage={2} totalPages={20} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('decrements the currentPage when previous is clicked', () => {
    const updatePageFn = jest.fn();
    const wrapper = shallow(
      <Paging currentPage={10} totalPages={10} updatePage={updatePageFn} />
    );

    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    expect(updatePageFn.mock.calls[0][0]).toEqual(9);
  });

  it('decrements the currentPage when previous is clicked', () => {
    const updatePageFn = jest.fn();
    const wrapper = shallow(
      <Paging currentPage={10} totalPages={20} updatePage={updatePageFn} />
    );

    wrapper
      .find('button')
      .at(1)
      .simulate('click');

    expect(updatePageFn.mock.calls[0][0]).toEqual(11);
  });

  it('the previous button is not displayed on the first page', () => {
    const wrapper = shallow(
      <Paging currentPage={1} totalPages={20} updatePage={() => {}} />
    );

    expect(wrapper.find('button')).toHaveLength(1);
    expect(
      wrapper
        .find('button')
        .at(0)
        .text()
    ).toEqual('>');
  });

  it('the next button is not displayed on the last page', () => {
    const wrapper = shallow(
      <Paging currentPage={20} totalPages={20} updatePage={() => {}} />
    );

    expect(wrapper.find('button')).toHaveLength(1);
    expect(
      wrapper
        .find('button')
        .at(0)
        .text()
    ).toEqual('<');
  });
});

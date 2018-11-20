import React from 'react';
import Pager from './Pager';
import { shallow } from 'enzyme';

describe('Pager Component', () => {
  it('should be a pager', () => {
    const updatePageFn = jest.fn();
    const wrapper = shallow(
      <Pager
        currentPage={1}
        totalPages={5}
        updatePage={updatePageFn}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

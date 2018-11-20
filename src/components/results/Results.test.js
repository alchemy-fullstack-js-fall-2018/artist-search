import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

const updateCountFn = jest.fn();
const resultComponentFn = jest.fn();

const resultOfGetResults = {
  totalPages: 1,
  totalResults: 1,
  results: [{
    name: 'Joni Mitchell',
    description: 'American folksinger',
    type: 'Person',
    id: '12345'
  }]
};

const props = {
  currentPage: 1,
  updateCounts: updateCountFn,
  getResults: () => Promise.resolve(resultOfGetResults),
  ResultComponent: resultComponentFn,
  query: {
    name: 'Joni Mitchell'
  }
};

describe ('tests for Results component', () => {

  it('renders an Results component', () => {
    const wrapper = shallow(<Results {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

});

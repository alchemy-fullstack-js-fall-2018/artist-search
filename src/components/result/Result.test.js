import React from 'react';
import { shallow } from 'enzyme';
const chance = require('chance').Chance();
import Result from './Result';

describe('Result Component', () => {

  let wrapper;
  beforeEach(() => {
    const name = 'Jack Black';
    const description = 'It was an electrical fire. Total electrical fire.';
    const id = 'abcd1243';
    wrapper = shallow(
      <Result
        name={name}
        description={description}
        id={id}
      />
    );
  });

  it('renders component', () => {
    expect(wrapper).toMatchSnapshot();
  });

});

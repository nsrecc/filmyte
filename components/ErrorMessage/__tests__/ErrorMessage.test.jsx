/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ErrorMessage from '../ErrorMessage';

describe('ErrorMessage', () => {
  let props;

  beforeEach(() => {
    props = {
      message: '',
    };
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<ErrorMessage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with props', () => {
    props.message = 'Error message';
    const wrapper = shallow(<ErrorMessage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has h1 element containing Error', () => {
    const wrapper = shallow(<ErrorMessage {...props} />);
    expect(wrapper.find('h1').text()).toMatch('Error');
  });

  it('has h2 element containing passed message prop', () => {
    props.message = 'Error message';
    const wrapper = shallow(<ErrorMessage {...props} />);
    expect(wrapper.find('h2').text()).toMatch('Error message');
  });
});

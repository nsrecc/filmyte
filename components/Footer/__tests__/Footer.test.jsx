import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Footer from '../Footer';

describe('Footer', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('contains copyright notice', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('#copyright').exists()).toBe(true);
  });
});

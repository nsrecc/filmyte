import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Link from 'next/link';
import Header from '../Header';

describe('Header', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('uses next/link components for navbar elements', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find(Link).exists()).toBe(true);
  });
});

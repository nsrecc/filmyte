import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Custom404 from 'pages/404';

describe('Custom 404', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Custom404 />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has h1 element containing 404', () => {
    const wrapper = shallow(<Custom404 />);
    expect(wrapper.find('h1').text()).toMatch('404');
  });
});

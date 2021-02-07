/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { ThemeProvider } from '../ThemeProvider';

describe('ThemeProvider', () => {
  let props;

  beforeEach(() => {
    props = {
      children: <p>test</p>,
    };
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<ThemeProvider {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('loads light theme as default', () => {
    const wrapper = shallow(<ThemeProvider {...props} />);
    expect(wrapper.find('div').hasClass('light')).toBe(true);
  });

  it('sets theme to dark theme when theme is toggled', () => {
    const wrapper = shallow(<ThemeProvider {...props} />);
    wrapper.find('ContextProvider').prop('value').toggleTheme();
    expect(wrapper.find('div').hasClass('dark')).toBe(true);
  });
});

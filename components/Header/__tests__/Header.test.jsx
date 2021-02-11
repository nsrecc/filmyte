import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { useThemeContext } from 'providers/ThemeProvider/ThemeProvider';
import Header from '../Header';

jest.mock('providers/ThemeProvider/ThemeProvider', () => ({
  useThemeContext: jest.fn().mockName('useThemeContext'),
}));

describe('Header', () => {
  const toggleTheme = jest.fn().mockName('toggleTheme');

  beforeEach(() => {
    useThemeContext.mockReturnValue({
      themeIsLight: true,
      toggleTheme,
    });
  });

  // after each test, clear the calls and instances of all mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('uses next/link components for navbar elements', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('Link').exists()).toBe(true);
  });

  describe('theme toggle button', () => {
    it('calls toggleTheme when clicked', () => {
      const wrapper = shallow(<Header />);
      wrapper.find('#theme-toggle').prop('onClick')();
      expect(toggleTheme).toHaveBeenCalledTimes(1);
    });

    it('contains a themeIcon element of either Sun or Moon', () => {
      const wrapper = shallow(<Header />);
      const buttonEl = wrapper.find('#theme-toggle');
      expect(buttonEl.containsAnyMatchingElements(['Sun', 'Moon']));
    });
  });

  describe('Header with light theme', () => {
    it('contains button with Moon themeIcon with color black', () => {
      const wrapper = shallow(<Header />);
      const buttonEl = wrapper.find('#theme-toggle');
      expect(buttonEl.find('Moon').exists()).toBe(true);
      expect(buttonEl.find('Moon').prop('color')).toBe('#000000');
    });
  });

  describe('Header with dark theme', () => {
    beforeEach(() => {
      useThemeContext.mockReturnValue({
        themeIsLight: false,
        toggleTheme: jest.fn().mockName('toggleTheme'),
      });
    });

    it('contains button with Sun themeIcon with color white', () => {
      const wrapper = shallow(<Header />);
      const buttonEl = wrapper.find('#theme-toggle');
      expect(buttonEl.find('Sun').exists()).toBe(true);
      expect(buttonEl.find('Sun').prop('color')).toBe('#ffffff');
    });
  });
});

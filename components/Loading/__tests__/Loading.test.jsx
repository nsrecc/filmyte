/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { useThemeContext } from 'providers/ThemeProvider/ThemeProvider';
import Loading from '../Loading';

jest.mock('providers/ThemeProvider/ThemeProvider', () => ({
  useThemeContext: jest.fn().mockName('useThemeContext'),
}));

describe('Loading', () => {
  beforeEach(() => {
    useThemeContext.mockReturnValue({ themeIsLight: true });
  });

  // after each test, clear the calls and instances of all mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });

  it('contains react-spinners Loader element', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find('Loader').exists()).toBe(true);
  });

  describe('Loading with light theme', () => {
    it('contains react-spinners Loader element with prop color black', () => {
      const wrapper = shallow(<Loading />);
      expect(wrapper.find('Loader').prop('color')).toBe('#000000');
    });
  });

  describe('Loading with dark theme', () => {
    beforeEach(() => {
      useThemeContext.mockReturnValue({ themeIsLight: false });
    });

    it('contains react-spinners Loader element with prop color white', () => {
      const wrapper = shallow(<Loading />);
      expect(wrapper.find('Loader').prop('color')).toBe('#ffffff');
    });
  });
});

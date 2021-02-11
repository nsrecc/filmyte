import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { useThemeContext } from 'providers/ThemeProvider/ThemeProvider';
import Footer from '../Footer';

jest.mock('providers/ThemeProvider/ThemeProvider', () => ({
  useThemeContext: jest.fn().mockName('useThemeContext'),
}));

// TO DO: test for existing TMDb logo
describe('Footer', () => {
  beforeEach(() => {
    useThemeContext.mockReturnValue({ themeIsLight: true });
  });

  // after each test, clear the calls and instances of all mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('contains copyright notice', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('#copyright').exists()).toBe(true);
  });

  describe('Footer with light theme', () => {
    it('contains vercel logo with color black', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.find('#vercel-logo').exists()).toBe(true);
      expect(wrapper.find('#vercel-logo').prop('src')).toBe('/icons/vercel.svg');
    });
  });

  describe('Footer with dark theme', () => {
    beforeEach(() => {
      useThemeContext.mockReturnValue({ themeIsLight: false });
    });

    it('contains vercel logo with color white', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.find('#vercel-logo').exists()).toBe(true);
      expect(wrapper.find('#vercel-logo').prop('src')).toBe('/icons/vercel-white.svg');
    });
  });
});

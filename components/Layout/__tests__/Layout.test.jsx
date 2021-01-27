/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Layout from '../Layout';

describe('Layout', () => {
  let props;

  beforeEach(() => {
    props = {
      children: <p>test</p>,
    };
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Layout {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('contains default document title', () => {
    const defaultTitle = 'Filmyte | Discover Your Movies and TV Shows';

    const wrapper = shallow(<Layout {...props} />);
    expect(wrapper.find('title').exists()).toBe(true);
    expect(wrapper.find('title').text()).toMatch(defaultTitle);
  });

  it('contains Header', () => {
    const wrapper = shallow(<Layout {...props} />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('contains main content with children', () => {
    props.children = <h1>test child</h1>;

    const wrapper = shallow(<Layout {...props} />);
    expect(wrapper.contains(
      <main>
        { props.children }
      </main>
    ));
  });

  it('contains Footer', () => {
    const wrapper = shallow(<Layout {...props} />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});

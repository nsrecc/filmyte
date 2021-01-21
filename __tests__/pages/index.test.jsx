import React from 'react';
import { shallow, mount, render } from 'enzyme';
// only use MockedProvider if using queries in tests
// import { MockedProvider } from '@apollo/client/testing';
import Home from 'pages/index';

describe('Home', () => {
  it('matches snapshot', () => {
    // const wrapper = mount((
    //   <MockedProvider mocks={[]} addTypename={false}>
    //     <Home />
    //   </MockedProvider>
    // ));
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});

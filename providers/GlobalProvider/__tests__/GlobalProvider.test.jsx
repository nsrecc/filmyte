/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { act } from 'react-dom/test-utils';
// use MockedProvider for using apollo client queries in tests:
// for more information: https://www.apollographql.com/docs/react/development-testing/testing/
import { MockedProvider } from '@apollo/client/testing';
import { GET_CONFIGURATION } from 'graphql/configuration';
import { GET_GENRES_BY_MEDIA_TYPE } from 'graphql/genres';
import { mockConfigurationResponse } from '__mocks__/tmdbMocks/configurationMock';
import { mockGenresByMediaTypeObj } from '__mocks__/tmdbMocks/genreListMock';
import { GlobalProvider } from '../GlobalProvider';

describe('GlobalProvider', () => {
  let props;

  /* Mocks */
  const configurationMock = {
    request: {
      query: GET_CONFIGURATION,
    },
    result: {
      data: {
        configuration: mockConfigurationResponse,
      },
    },
  };

  const genresByMediaTypeMock = {
    request: {
      query: GET_GENRES_BY_MEDIA_TYPE,
    },
    result: {
      data: {
        genresByMediaType: mockGenresByMediaTypeObj,
      },
    },
  };

  beforeEach(() => {
    props = {
      children: <p>test</p>,
    };
  });

  it('matches snapshot', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[configurationMock, genresByMediaTypeMock]} addTypename={false}>
        <GlobalProvider {...props} />
      </MockedProvider>
    );

    // TO DO: refactor into global helper function
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      wrapper.update();
    });

    expect(wrapper).toMatchSnapshot();
  });
});

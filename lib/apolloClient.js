/**
 * --- Apollo Client ---
 * - Used apolloClient.js from https://github.com/vercel/next.js/blob/3410106958c1d1938a0a7e50cc4896986ad5890d/examples/with-apollo/lib/apolloClient.js
 *   originally from the official Next.js examples repository: https://github.com/vercel/next.js/tree/canary/examples/with-apollo.
 *
 * - An Apollo client is created with the proper configuration. A new instance of Apollo client
 *   should not be created for different pages in the app.
 *
 * - The reason I went with this approach versus 'next-apollo' (https://github.com/adamsoffer/next-apollo)
 *   was because of the ability to customize Next.js _app.jsx as needed for keeping state when
 *   navigating pages and adding global css where possible.
 *
 * - _app.jsx will use 'useApollo' to pass the Apollo Client instance to the different pages.
 */
import { useMemo } from 'react';
import fetch from 'cross-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient;

function createApolloClient() {
  return new ApolloClient({
    // ssrMode should be true when the page is pre-rendered using Server-side Rendering (SSR),
    // and false when it is rendered on the client
    ssrMode: typeof window === 'undefined',
    // Pass cross-fetch into HttpLink's constructor for environments that do not include 'fetch'
    link: new HttpLink({
      // (API) Server URL (must be absolute)
      uri: 'http://localhost:4000/api/graphql',
      // Additional fetch() options like `credentials` or `headers`
      // credentials: 'same-origin',
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}

/* eslint-disable */
export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}

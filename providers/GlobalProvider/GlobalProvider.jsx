import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { GET_CONFIGURATION } from 'graphql/configuration';
import { GET_GENRES_BY_MEDIA_TYPE } from 'graphql/genres';
import get from 'lodash/get';

// Create GlobalContext with default object
const GlobalContext = createContext({
  globalConfiguration: {},
  globalGenresByMediaType: {},
});

// Export useGlobalContext via useContext hook at any nested components to use global state
export const useGlobalContext = () => useContext(GlobalContext);

/**
 * GlobalProvider wraps the application in _app.jsx with passed values for global state:
 * - configuration
 * - genresByMediaType
 */
export const GlobalProvider = ({ children }) => {
  // console.log('insideGlobalProvider directly / render');

  // TO DO: would it make sense to put the constants as initial state? Or even have constant be set
  // inside useEffect if data is undefined due to error?

  /* configuration */
  const [configuration, setConfiguration] = useState(null);

  const {
    loading: configurationLoading,
    error: configurationError,
    data: configurationData, // data = { configuration: configuration obj }
  } = useQuery(GET_CONFIGURATION);
  // console.log('GlobalProvider, configurationLoading: ', configurationLoading);
  // console.log('GlobalProvider, configurationError: ', configurationError);
  // console.log('GlobalProvider, configurationData: ', configurationData);

  useEffect(() => {
    if (configurationData) { // if data obj is not undefined
      const configurationObj = get(configurationData, 'configuration', null);
      // console.log('GlobalProvider useEffect, configurationObj: ', configurationObj);
      setConfiguration(configurationObj);
    }
  }, [configurationData]);

  /* genresByMediaType */
  const [genresByMediaType, setGenresByMediaType] = useState(null);

  const {
    loading: genresByMediaTypeLoading,
    error: genresByMediaTypeError,
    data: genresByMediaTypeData, // data = { genresByMediaType: genresByMediaType obj }
  } = useQuery(GET_GENRES_BY_MEDIA_TYPE);
  // console.log('GlobalProvider, genresByMediaTypeLoading: ', genresByMediaTypeLoading);
  // console.log('GlobalProvider, genresByMediaTypeError: ', genresByMediaTypeError);
  // console.log('GlobalProvider, genresByMediaTypeData: ', genresByMediaTypeData);

  useEffect(() => {
    if (genresByMediaTypeData) { // if data obj is not undefined
      const genresByMediaTypeObj = get(genresByMediaTypeData, 'genresByMediaType', null);
      // console.log('GlobalProvider useEffect, genresByMediaTypeObj: ', genresByMediaTypeObj);
      setGenresByMediaType(genresByMediaTypeObj);
    }
  }, [genresByMediaTypeData]);

  // TO DO: try running app with server not running
  return (
    <GlobalContext.Provider
      value={{
        globalConfiguration: {
          configuration,
          configurationLoading,
          configurationErrored: !!configurationError,
        },
        globalGenresByMediaType: {
          genresByMediaType,
          genresByMediaTypeLoading,
          genresByMediaTypeErrored: !!genresByMediaTypeError,
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

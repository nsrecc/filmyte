import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.errorMessageWrapper}>
      <h1>Error.</h1>
      <h2>{`${message && `${message}. `}Please try again later.`}</h2>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: '',
};

export default ErrorMessage;

import React from 'react';
import Proptypes from 'prop-types';

export const Notification = ({ message }) => <h2>{message}</h2>;

Notification.propTypes = {
  message: Proptypes.string.isRequired,
};

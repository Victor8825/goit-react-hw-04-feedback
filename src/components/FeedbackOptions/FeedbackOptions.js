import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box.styled';
import { StyledFeedbackOptions } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <StyledFeedbackOptions>
      <Box gridGap={4} mb={20}>
        {options.map(option => {
          return (
            <button
              type="button"
              key={option}
              name={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          );
        })}
      </Box>
    </StyledFeedbackOptions>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

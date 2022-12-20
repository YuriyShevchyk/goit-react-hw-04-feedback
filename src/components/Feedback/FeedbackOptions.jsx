import PropTypes from 'prop-types';
import { Button } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(key => (
      <Button key={key} name={key} type="button" onClick={onLeaveFeedback}>
        {key}
      </Button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
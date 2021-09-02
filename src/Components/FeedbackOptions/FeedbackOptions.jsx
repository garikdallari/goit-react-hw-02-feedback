import React from 'react';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <button type="button" data-action="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" data-action="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" data-action="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;

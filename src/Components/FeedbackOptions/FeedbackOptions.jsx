import React from 'react';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const data = Object.keys(options);
  return (
    <div>
      {data.map(feedback => (
        <button
          key={feedback}
          type="button"
          data-action={feedback}
          onClick={onLeaveFeedback}
        >
          {feedback}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;

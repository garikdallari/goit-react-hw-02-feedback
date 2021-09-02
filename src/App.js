import React, { Component } from 'react';
import Section from './Components/Section/Section';
import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Notification from './Components/Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = [];
    total.push(good, neutral, bad);
    return total.reduce((total, el) => total + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  handleFeedback = e => {
    const target = e.currentTarget.dataset.action;
    this.setState(prevState => ({
      [target]: prevState[target] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.handleFeedback} />

        <div>
          <h2>Statistics</h2>
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </div>
      </Section>
    );
  }
}

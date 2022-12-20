import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const key = event.target.name;
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.bad + this.state.good + this.state.neutral;
  }

  countPositiveFeedbackPercentage() {
    const totalRates = this.countTotalFeedback();
    const goodRates = this.state.good;
    return goodRates > 0 ? Math.round((goodRates / totalRates) * 100) : 0;
  }

  render() {
    const totalRates = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {totalRates > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
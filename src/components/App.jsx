import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export default function App()  {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  };

  handleClick = event => {
    const key = event.target.name;
    switch (key) {
      case 'good':
        return setGood(state => state + 1);
      case 'neutral':
        return setNeutral(state => state + 1);
      case 'bad':
        return setBad(state => state + 1);
      default:
        return;
    }
  };

  countTotalFeedback=()=> {
    return bad + good + neutral;
  };

  countPositiveFeedbackPercentage=()=> {
    const totalRates = countTotalFeedback();
    return good > 0 ? Math.round((good / totalRates) * 100) : 0;
  };

  const totalRates = countTotalFeedback();

  
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({good, bad, neutral})}
            onLeaveFeedback={handleClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {totalRates > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  

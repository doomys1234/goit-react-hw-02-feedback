import React from 'react';
import Feedback from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import './App.css';

class App extends React.Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };
  handleIncrement = e => {
    const value = e.target.textContent;
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
    this.countTotalFeedback();
  };
  countTotalFeedback = () => {
    const valuesArr = Object.values(this.state);
    return valuesArr.reduce((acc, val) => {
      acc += val;
      return acc;
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.trunc((this.state.Good / this.countTotalFeedback()) * 100);
  };

  render() {
    const btnOptions = Object.keys(this.state);
    console.log(btnOptions);
    return (
      <div>
        <Section title={'Please leave your feedback'}>
          <Feedback options={btnOptions} onClick={this.handleIncrement} />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.Good}
              neutral={this.state.Neutral}
              bad={this.state.Bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

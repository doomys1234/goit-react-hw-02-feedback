import React from 'react';
import Feedback from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
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
    return (
      <div>
        <Section title={'Please leave your feedback'}>
          <Feedback options={btnOptions} onClick={this.handleIncrement} />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={this.state.Good}
            neutral={this.state.Neutral}
            bad={this.state.Bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;

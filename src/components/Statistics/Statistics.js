import React from 'react';
import PropTypes from 'prop-types';
class Statistics extends React.Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  };

  render() {
    return (
      <>
        <p>Good:{this.props.good}</p>
        <p>Neutral:{this.props.neutral}</p>
        <p>Bad:{this.props.bad}</p>
        {this.props.total >= 1 && <p>Total:{this.props.total}</p>}
        {this.props.percentage > 0 && <span>{this.props.percentage}%</span>}
      </>
    );
  }
}
export default Statistics;

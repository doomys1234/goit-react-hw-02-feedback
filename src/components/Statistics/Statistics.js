import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.scss';
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
      <div className={s.wrap}>
        <p className={s.text}>Good:{this.props.good}</p>
        <p className={s.text}>Neutral:{this.props.neutral}</p>
        <p className={s.text}>Bad:{this.props.bad}</p>
        {this.props.total >= 1 && (
          <p className={s.text}>Total:{this.props.total}</p>
        )}
        {this.props.percentage > 0 && <span>{this.props.percentage}%</span>}
      </div>
    );
  }
}
export default Statistics;

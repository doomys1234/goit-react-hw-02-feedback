import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.scss';
class Feedback extends React.Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className={s.container}>
        {this.props.options.map(btn => {
          return (
            <button
              className={s.button}
              key={btn}
              type="button"
              onClick={e => {
                this.props.onClick(e);
              }}
            >
              {btn}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Feedback;

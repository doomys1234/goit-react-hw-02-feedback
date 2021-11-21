import React from 'react';
import PropTypes from 'prop-types';
class Feedback extends React.Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
  };

  render() {
    return (
      <>
        {this.props.options.map(btn => {
          return (
            <button
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
      </>
    );
  }
}

export default Feedback;

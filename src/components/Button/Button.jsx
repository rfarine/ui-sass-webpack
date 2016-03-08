import { default as React, Component, PropTypes } from 'react';
import { default as styles } from './Button.scss';

export default class Button extends Component {
  static propTypes = {
    style: PropTypes.array,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    style: [
      styles.component,
    ],
    text: 'Default',
  };

  render() {
    const { style, text } = this.props;

    return (
      <div>
        <button className={style.join(' ')}>{text}</button>
      </div>
    );
  }
}

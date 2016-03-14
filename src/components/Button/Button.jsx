import { default as React, Component, PropTypes } from 'react';
import { default as styles } from './Button.scss';

export default class Button extends Component {
  static propTypes = {
    clickEvent: PropTypes.func,
    style: PropTypes.array,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    clickEvent: () => {
      console.log('I clicked something!');
    },
    style: [
      styles.component,
    ],
    text: 'Default',
  };

  render() {
    const { clickEvent, style, text } = this.props;

    return (
      <button className={style.join(' ')} onClick={clickEvent}>{text}</button>
    );
  }
}

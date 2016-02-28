import { default as React, Component, PropTypes } from 'react';
import { default as styles } from './Button.scss';

export default class ButtonLarge extends Component {
  static propTypes = {
    style: PropTypes.array.isRequired,
  };

  static defaultProps = {
    style: [
      styles.component,
      styles.component_lg,
    ],
  };

  render() {
    const { style } = this.props;

    return (
      <div>
        <button className={style.join(' ')}>Large</button>
      </div>
    );
  }
}

import { default as React, Component, PropTypes } from 'react';
import { default as styles } from './Button.scss';

export default class ButtonDropdown extends Component {
  static propTypes = {
    style: PropTypes.array,
  };

  static defaultProps = {
    style: [],
  };

  render() {
    return (
      <div>
        <button className={styles.component} data-toggle="dropdown">Default</button>
      </div>
    );
  }
}

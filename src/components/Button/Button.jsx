import { default as React, Component } from 'react';
import { default as styles } from './Button.scss';

export default class Button extends Component {
  render() {
    return (
      <div>
        <button className={styles.component}>Default</button>
      </div>
    );
  }
}

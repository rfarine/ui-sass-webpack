import { default as React, Component } from 'react';
import { default as styles } from './Button.scss';

export default class Button extends Component {
  render() {
    return <button className={styles.component}>Button</button>;
  }
}

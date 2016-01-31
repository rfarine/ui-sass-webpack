import { default as React } from 'react';
import { default as styles } from './Header.scss';

export default class Header extends React.Component {
  render() {
    return <h1 className={styles.text}>Header</h1>;
  }
}

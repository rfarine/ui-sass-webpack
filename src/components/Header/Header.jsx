import { default as React, Component } from 'react';
import { default as styles } from './Header.scss';
import { default as jade } from './Header.jade';

export default class Header extends Component {
  render() {
    return jade({ styles });
  }
}

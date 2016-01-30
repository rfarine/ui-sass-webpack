import { default as React, Component } from 'react';
import { default as styles } from './Styleguide.scss';
import { default as jade } from './Styleguide.jade';

export default class Styleguide extends Component {
  render() {
    return jade({ styles });
  }
}

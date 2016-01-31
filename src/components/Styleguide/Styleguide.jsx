import { default as React, Component } from 'react';
import { default as styles } from './Styleguide.scss';
import { default as jade } from './Styleguide.jade';

import { default as Header } from '../../components/Header/Header';

export default class Styleguide extends Component {
  render() {
    return (
      jade({ 
        styles, 
        components: {
          Header,
        } 
      })
    );
  }
}

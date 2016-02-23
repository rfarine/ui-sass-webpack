import { default as React, Component } from 'react';
import { default as styles } from './Styleguide.scss';
import { default as template } from './Styleguide.jade';

import { default as Button } from '../../src/components/Button/Button';

export default class Styleguide extends Component {
  render() {
    return (
      template({
        styles,
        components: {
          Button,
        },
      })
    );
  }
}

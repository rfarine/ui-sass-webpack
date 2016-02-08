import { default as React } from 'react';
import { default as styles } from './Styleguide.scss';
import { default as template } from './Styleguide.jade';

import { default as Header } from '../../src/components/Header/Header';

export default class Styleguide extends React.Component {
  render() {
    return (
      template({
        styles,
        components: {
          Header,
        },
      })
    );
  }
}

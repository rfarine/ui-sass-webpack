import { default as React, Component, PropTypes } from 'react';
import { default as styles } from './Styleguide.scss';
import { default as jade } from './Styleguide.jade';

export default class Styleguide extends Component {
  static propTypes = {
    content: PropTypes.array.isRequired,
  };

  render() {
    const { content } = this.props;

    return jade({
      styles, content,
    });
  }
}

import { default as React, Component, PropTypes } from 'react';
import { default as styles } from './Colors.scss';
import { default as _ } from 'lodash';

export default class Colors extends Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
  };

  static defaultProps = {
    colors: [
      'red', 'tan', 'teal', 'black', 'white',
    ],
  };

  getListItems() {
    const { colors } = this.props;

    const listItems = _.map(colors, (color, key) => (
      <li key={key} className={`${styles.swatch} ${styles.swatch}_${color}`}>
        <span className={styles.hex}>
          Color Hex
        </span>
        <span className={styles.variable}>
          {color}
        </span>
      </li>
    ));

    return listItems;
  }

  render() {
    const listItems = this.getListItems();

    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

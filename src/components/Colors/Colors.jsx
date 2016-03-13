import { default as React, Component, PropTypes } from 'react';
import { default as styles } from './Colors.scss';
import { default as _ } from 'lodash';

export default class Colors extends Component {
  static propTypes = {
    colors: PropTypes.object.isRequired,
  };

  static defaultProps = {
    colors: {
      red: '#C84420',
      yellow: '#F5EAB0',
      teal: '#267765',
      black: '#23322F',
      gray: '#9EAFAD',
      white: '#EAE9DC',
    },
  };

  getListItems() {
    const { colors } = this.props;

    const listItems = _.map(colors, (color, key) => (
      <li key={key} className={styles.listItem}>
        <span className={`${styles.swatch} ${styles.swatch}_${key}`}></span>
        <span className={styles.color}>
          {color}<br/>
          ${key}
        </span>
      </li>
    ));

    return listItems;
  }

  render() {
    const listItems = this.getListItems();

    return (
      <div>
        <h1>Colors</h1>
        <ul className={styles.list}>
          {listItems}
        </ul>
      </div>
    );
  }
}

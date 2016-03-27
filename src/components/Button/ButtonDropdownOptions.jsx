import { default as React, Component, PropTypes } from 'react';
import { default as _ } from 'lodash';
import { default as styles } from './Button.scss';

export default class ButtonDropdownOptions extends Component {
  static propTypes = {
    style: PropTypes.array,
    options: PropTypes.object.isRequired,
    toggle: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    style: [styles.dropdown],
  }

  constructor(props) {
    super(props);
    this.clickEventListener = this.clickEventListener.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.toggle === true) {
      nextProps.style.push(styles.dropdown_isOpen);
    } else if (_.includes(nextProps.style, styles.dropdown_isOpen)) {
      nextProps.style.pop();
    } else {
      return;
    }
  }

  clickEventListener(action) {
    if (typeof action === 'function') {
      action();
    } else {
      window.location.href = action;
    }
  }

  render() {
    const { options, style } = this.props;

    const dropdownList = _.map(options, (action, key) => (
      <li
        key={key}
        className={styles.dropdown_item}
        onClick={() => this.clickEventListener(action)}
      >
        {key}
      </li>
    ));

    return (
      <ul className={style.join(' ')}>
        {dropdownList}
      </ul>
    );
  }
}

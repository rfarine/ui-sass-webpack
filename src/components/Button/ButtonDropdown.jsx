import { default as React, PropTypes } from 'react';
import { default as Button } from './Button';
import { default as ButtonDropdownOptions } from './ButtonDropdownOptions';
import { default as styles } from './Button.scss';

export default class ButtonDropdown extends Button {
  static propTypes = {
    style: PropTypes.array,
    options: PropTypes.object.isRequired,
  };

  static defaultProps = {
    style: [styles.component],
    options: {
      1: ['text', 'link'],
      2: ['text', 'action'],
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.clickEventListener = this.clickEventListener.bind(this);
  }

  clickEventListener(event) {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { style, options } = this.props;

    return (
      <div className={styles.dropdown_wrapper}>
        <Button
          style={style}
          clickEvent={this.clickEventListener}
          text="Default"
        />
        <ButtonDropdownOptions toggle={this.state.isOpen} options={options} />
      </div>
    );
  }
}

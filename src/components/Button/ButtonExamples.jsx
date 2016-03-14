import { default as React, Component } from 'react';
import { default as styles } from './Button.scss';
import { default as Button } from './Button';
import { default as ButtonDropdown } from './ButtonDropdown';

export default class ButtonExamples extends Component {
  constructor(props) {
    super(props);

    this.buttonDropdownAction = this.buttonDropdownAction.bind(this);
  }

  buttonDropdownAction() {
    alert('I am an action!');
  }

  render() {
    return (
      <div>
        <div className={styles.sg_container}>
          <h1>Buttons</h1>
          <div className={styles.sg_section}>
            <h2>Default</h2>
            <Button /><br/><br/>
            <Button style={[styles.component, styles.component_sm]} text="Small" /><br/><br/>
            <Button style={[styles.component, styles.component_lg]} text="Large" /><br/><br/>
            <Button style={[styles.component, styles.component_xlg]} text="XLarge" />
          </div>
          <div className={styles.sg_section}>
            <h2>White</h2>
            <Button style={[styles.component, styles.component_white]} /><br/><br/>
            <Button
              style={[styles.component, styles.component_sm, styles.component_white]}
              text="Small"
            />
            <br/><br/>
            <Button
              style={[styles.component, styles.component_lg, styles.component_white]}
              text="Large"
            /><br/><br/>
            <Button
              style={[styles.component, styles.component_xlg, styles.component_white]}
              text="XLarge"
            />
          </div>
          <div className={styles.sg_section}>
            <h2>Colors</h2>
            <Button style={[styles.component, styles.component_isDanger]} text="Danger" />
            <br/><br/>
            <Button style={[styles.component, styles.component_isWarning]} text="Warning" />
            <br/><br/>
            <Button style={[styles.component, styles.component_isDisabled]} text="Disabled" />
            <br/><br/>
            <Button style={[styles.component, styles.component_isSuccess]} text="Success" />
          </div>
        </div>
        <div className={styles.sg_container}>
          <h1>Button Groups</h1>
          <ButtonDropdown
            options={{
              Link: 'http://google.com',
              Action: this.buttonDropdownAction,
            }}
          />
          <br/><br/>
          <ButtonDropdown
            style={[styles.component, styles.component_isDanger]}
            options={{
              Link: 'http://google.com',
              Action: this.buttonDropdownAction,
            }}
          />
        </div>
      </div>
    );
  }
}

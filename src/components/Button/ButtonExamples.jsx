import { default as React, Component } from 'react';
import { default as styles } from './Button.scss';
import { default as Button } from './Button';

export default class ButtonExamples extends Component {
  render() {
    return (
      <div>
        <h1>Buttons</h1>

        <Button /><br/><br/>
        <Button style={[styles.component, styles.component_sm]} text="Small" /><br/><br/>
        <Button style={[styles.component, styles.component_lg]} text="Large" /><br/><br/>
        <Button style={[styles.component, styles.component_xlg]} text="XLarge" />
      </div>
    );
  }
}

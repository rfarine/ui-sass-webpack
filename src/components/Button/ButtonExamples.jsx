import { default as React, Component } from 'react';
import { default as Button } from './Button';
import { default as ButtonSmall } from './ButtonSmall';
import { default as ButtonLarge } from './ButtonLarge';
import { default as ButtonXLarge } from './ButtonXLarge';

export default class ButtonExamples extends Component {
  render() {
    return (
      <div>
        <h1>Buttons</h1>

        <Button /><br/><br/>
        <ButtonSmall /><br/><br/>
        <ButtonLarge /><br/><br/>
        <ButtonXLarge />
      </div>
    );
  }
}

import { default as React } from 'react';
import { default as ReactDOM } from 'react-dom';
import { default as Styleguide } from '../components/Styleguide/Styleguide';
import { default as Header } from '../components/Header/Header';

ReactDOM.render(
  <Styleguide content={[ Header ]} />,
  document.getElementById('styleguide')
);

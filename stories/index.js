import { h } from 'preact';
import { storiesOf } from '@storybook/preact';
import {Alert} from '../src/components/Alert';
require('preact/debug');

storiesOf('Alert', module)
  .add('with text', () => (
    <Alert>Hello Button</Alert>
  ))
  .add('with emoji', () => (
    <Alert><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Alert>
  ));
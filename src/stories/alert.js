/** @jsx h */
import { h } from 'preact';
import { storiesOf } from '@storybook/preact';
import { withKnobs, text, radios} from '@storybook/addon-knobs';

import { Alert } from '../components/Alert.tsx';

require('preact/debug');
const stories = storiesOf('Alert', module)
    .addDecorator(withKnobs);

stories
  .add('with Attribute', () => (
      <Alert
          type={radios('type', ['success', 'anything'], 'anything')}
          text={text('text', 'Alert')}
      />
  ))
.add('with children', () => (
    <Alert>
        <a href="/">Click me</a>
    </Alert>
    ));
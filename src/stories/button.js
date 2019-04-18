/** @jsx h */
import { h } from 'preact';
import { storiesOf } from '@storybook/preact';
import { withKnobs, text, boolean, radios} from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';

import { Button } from '../components/Button.tsx';

require('preact/debug');
const stories = storiesOf('Button', module)
    .addDecorator(withKnobs);

stories
  .add('with Attribute', () => (
      <Button
          type={radios('type', ['submit', 'anything'], 'submit')}
          text={text('text', 'Button')}
          onClick={action('onClick')}
          disabled={boolean('disabled', false)}
      />
  ));
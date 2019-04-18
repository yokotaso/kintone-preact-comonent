/** @jsx h */
import { h } from 'preact';
import { storiesOf } from '@storybook/preact';
import {withKnobs} from "@storybook/addon-knobs/src/index";
import {Spinner} from "../components/Spinner.tsx";

require('preact/debug');
const stories = storiesOf('Spinner', module)
    .addDecorator(withKnobs);

stories
    .add('Spinner', () => (<Spinner />));
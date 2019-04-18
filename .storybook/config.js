import { configure } from '@storybook/preact';

function loadStories() {
  require('../stories/alert.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
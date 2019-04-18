import { configure } from '@storybook/preact';

const req = require.context('../src/stories', true, /.*\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  // You can require as many stories as you need.
}

configure(loadStories, module);
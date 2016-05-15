'use strict';

const SDK = require('inline-sdk');
const CommandType = SDK.CommandType;

const inline = new SDK();

inline.onCommand((type, payload, context) => {
  context.sendImage('https://source.unsplash.com/random', 'http://darusha.ca/wp-content/uploads/2012/12/mystery.jpg');
});

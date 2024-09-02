const responses = require('../../responses/index.js');

const insults = [
  {
    insult: 'Never hung poison on a fouler toad',
    play: 'Rickard III',
  },
  {
    insult: 'He thinks too much: such men are dangerous. ',
    play: 'Julius Ceasar',
  },
];

exports.handler = async (event, context) => {
  console.log(event);
  // Hämta alla insults
  return responses.sendResponse(200, { insults });
};

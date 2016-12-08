'use strict';

const npmCheck = require('./in');
const createState = require('./state/state');
const staticOutput = require('./out/static-output');
const interactiveUpdate = require('./out/interactive-update');

function init(userOptions) {
    return createState(userOptions)
        .then(currentState => npmCheck(currentState));
}

module.exports.check = init;
module.exports.staticOutput = staticOutput;
module.exports.interactiveUpdate = interactiveUpdate;

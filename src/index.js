const fs = require('fs');

let SR = null;

// checks value is key in resources file
function isKey(value, state) {
  if (!SR) {
    // TODO transpale file on the fly
    SR = require(state.resfile);
  }
  return typeof SR[value] !== undefined;
}

export default function ({types: t}) {
  return {
    visitor: {
      StringLiteral(path, state) {
        console.log(Object.keys(path));
        if (isKey(path.value, state)) {
          // TODO replace with function call, should be configurable
        }
      }
    }
  };
}

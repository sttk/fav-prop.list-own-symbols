'use strict';

function listOwnSymbols(obj) {
  /* istanbul ignore if */
  if (typeof Symbol !== 'function') {
    return [];
  }

  switch (typeof obj) {
    case 'object': {
      obj = obj || [];
      break;
    }
    case 'function': {
      break;
    }
    default: {
      return [];
    }
  }

  return Object.getOwnPropertySymbols(obj);
}

module.exports = listOwnSymbols;

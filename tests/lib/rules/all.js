'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rules = require('../../../lib/rules/all');
const RuleTester = require('eslint').RuleTester;

// Only a couple of smoke tests because otherwise it would get very reduntant

const ruleTester = new RuleTester();

ruleTester.run('_.concat', rules.concat, {
  valid: [
    'array.concat(2, [3], [[4]])'
  ],
  invalid: [{
    code: '_.concat(array, 2, [3], [[4]])',
    errors: ['Consider using the native Array.prototype.concat()']
  }]
});

ruleTester.run('lodash.keys', rules.keys, {
  valid: [
    'Object.keys({one: 1, two: 2, three: 3})'
  ],
  invalid: [{
    code: 'lodash.keys({one: 1, two: 2, three: 3})',
    errors: ['Consider using the native Object.keys()']
  }]
});

ruleTester.run('underscore.forEach', rules['for-each'], {
  valid: [
    '[0, 1].forEach()'
  ],
  invalid: [{
    code: 'underscore.forEach()',
    errors: ['Consider using the native Array.prototype.forEach()']
  }]
});

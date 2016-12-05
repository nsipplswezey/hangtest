exports.config = {
  specs: ['hangtest.js'],
  mochaOpts: {
    reporter: 'spec',
    slow: 3000,
    enablesTimeouts: false
  },
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true
};

'use strict';

try {
  require('node-env-file')('.env');
} catch (e) {
  console.log(e);
} finally {
  var merchantAPI = require('../index.js');
  merchantAPI.start({
    
  });
  if (process.env.RPC) {
    merchantAPI.startRPC({
      api_code: process.env.API_CODE
    });
  }
}

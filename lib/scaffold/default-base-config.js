'use strict';

var path = require('path');

/**
 * Will return the path and default bitcore-node configuration on environment variables
 * or default locations.
 * @param {Object} options
 * @param {String} options.network - "testnet" or "livenet"
 * @param {String} options.datadir - Absolute path to bitcoin database directory
 */
function getDefaultBaseConfig(options) {
  if (!options) {
    options = {};
  }
  return {
    path: process.cwd(),
    config: {
      network: options.network || 'livenet',
      port: 3001,
      services: ['bitcoind', 'web'],
      servicesConfig: {
        bitcoind: {
          connect: {
        	rpcconnect: '127.0.0.1',
        	rpcport: 6004,
        	rpcuser: 'user',
        	rpcpassword: 'pass',
        	zmqpubrawtx: 'tcp://127.0.0.1:29332',
        	zmqpubhashblock: 'tcp://127.0.0.1:29332'
          }
        }
      }
    }
  };
}

module.exports = getDefaultBaseConfig;

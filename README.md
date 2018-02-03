BitcoreQuark Node
============

A BitcoinQuark full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services. At the minimum a node has an interface to [Bitcoin Core with additional indexing](https://github.com/bitpay/bitcoin/tree/0.12.1-bitcore) for more advanced address queries. Additional services can be enabled to make a node more useful such as exposing new APIs, running a block explorer and wallet service.

## Install

```bash
npm install -g btq-bitcore-node
btq-bitcore-node start
```

## Prerequisites

- GNU/Linux x86_32/x86_64, or OSX 64bit *(for bitcoinquarkd distributed binaries)*
- Node.js v0.10, v0.12 or v4
- ZeroMQ *(libzmq3-dev for Ubuntu/Debian or zeromq on OSX)*
- ~200GB of disk storage
- ~8GB of RAM

## Configuration

Bitcore includes a Command Line Interface (CLI) for managing, configuring and interfacing with your Bitcore Node.

```bash
btq-bitcore-node create -d <bitcoinquark-data-dir> mynode
cd mynode
btq-bitcore-node install <service>
btq-bitcore-node install btq-insight-api
btq-bitcore-node install btq-insight-ui
btq-bitcore-node install https://github.com/yourname/helloworld
```

This will create a directory with configuration files for your node and install the necessary dependencies. For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of Bitcore:

- [Insight API](https://github.com/bitcoinquark/insight-api)
- [Insight UI](https://github.com/bitcoinquark/insight-ui)
- [Bitcore Wallet Service](https://github.com/bitcoinquark/bitcore-wallet-service)

## Documentation

- [Upgrade Notes](docs/upgrade.md)
- [Services](docs/services.md)
  - [Bitcoind](docs/services/bitcoind.md) - Interface to Bitcoin Core
  - [Web](docs/services/web.md) - Creates an express application over which services can expose their web/API content
- [Development Environment](docs/development.md) - Guide for setting up a development environment
- [Node](docs/node.md) - Details on the node constructor
- [Bus](docs/bus.md) - Overview of the event bus constructor
- [Release Process](docs/release.md) - Information about verifying a release and the release process.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/bitcoinquark/bitcore/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/bitcoinquark/bitcore-node/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc.
Copyright 2017-2018 bitcoinquark.org

- bitcoinquark: Copyright (c) 2009-2018 BitcoinQuark Developers (MIT License)

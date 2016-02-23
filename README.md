# Interesting Facts

- The Ethereum currency is named Ether or ETH for short.
- The minimun unit of Ether is called `Wei`.
- A smart contract is deployed to a particular address.
- [In Ethereum state is made up of objects called accounts](https://github.com/ethereum/wiki/wiki/White-Paper#ethereum-accounts) and each account contains four fields:
	- The nonce, a counter used to make sure each transaction can only be processed once
	- The account's current ether balance
	- The account's contract code, if present
	- The account's storage (empty by default)
- "Ether" is the main internal crypto-fuel of Ethereum, and is used to pay transaction fees. In general, there are two types of accounts: externally owned accounts, controlled by private keys, and contract accounts, controlled by their contract code. An externally owned account has no code, and one can send messages from an externally owned account by creating and signing a transaction; in a contract account, every time the contract account receives a message its code activates, allowing it to read and write to internal storage and send other messages or create contracts in turn.
- Funds sent to a contract are in the contract itself until `suicide` is called.
- Seems like there is a possibility of Ethereum implement [Proof of Stake System](http://consensys.github.io/developers/articles/101-noob-intro/#parti) without miners.

# Tools & Concepts

- [Geth](https://github.com/ethereum/go-ethereum): Go client for Ethereum
- [Solidity](https://github.com/ethereum/solidity): Javascript based Ethereum language (compiles to EVM bytecode)
- [Serpent](https://github.com/ethereum/serpent): Python based Ethereum language (compiles to EVM bytecode)
- [LLL](https://github.com/ethereum/lll): Lisp based Ethereum language (compiles to EVM bytecode)
- **solc**: Solidity Language Compiler
- [ABI](https://github.com/ethereum/wiki/wiki/Solidity,-Docs-and-ABI): Method for encoding/decoding data into and out of transactions. It also describes a contract interface (its public methods and variables).
- [Truffle](https://github.com/ConsenSys/truffle): npm package, basically Rails for Ethereum :). It provides generators for scaffolding and also provides tools (Mocha, Chai) allowing developers to perferm TDD while writing contracts.
- [Embark](https://github.com/iurimatias/embark-framework): Another Dapp framework, similar to Truffle though seems a bit less intrusive though less flexible too.
- [Web3.js](https://github.com/ethereum/web3.js): Ethereum Compatible Javascript API. It essentially allows web/mobile/desktop apps to read/write to the Ethereum network.
- [ether-pudding](https://github.com/ConsenSys/ether-pudding): Built on top of Web3.js, this framework provides a promise-oriented API for interacting with Ethereum network.
- [Ethstats](https://ethstats.net): Ethereum dashboard
- [Ether Converter](http://ether.fund/tool/converter): Tool for converting Ether to Wei, Kwei, Mwei, etc...
- [Provider Engine](https://github.com/MetaMask/provider-engine): Engine for creating functionality specific web3 providers. it's seems to be an attempt of modularize the RPC Ethereum API into functionality specific components. Perhaps similar to the middleware layers implementaed by frameworks like expressjs or golang martini?

# Resources

- [ConsenSys Medium Page](https://medium.com/@ConsenSys)
- [Ethereum White Paper](https://github.com/ethereum/wiki/wiki/White-Paper)
- [Ethereum Gitbook](https://ethereum.gitbooks.io/frontier-guide/content/)
- [Open Blockchain Whitepaper](https://github.com/openblockchain/obc-docs/blob/master/whitepaper.md)
- [Smart Contracts](https://en.wikipedia.org/wiki/Smart_contract)
- [Unpacking the term 'Smart Contract'](https://medium.com/@ConsenSys/unpacking-the-term-smart-contract-dc8ac8afc0ef#.nwwco4hrz)
- [Introduction to Smart Contracts on Ethereum](http://consensys.github.io/developers/articles/101-noob-intro/#parti)
- [Ethereum: Contracts & Transactions](https://github.com/ethereum/go-ethereum/wiki/Contracts-and-Transactions)
- [Device democracy: Saving the future of the Internet of Things](http://public.dhe.ibm.com/common/ssi/ecm/gb/en/gbe03620usen/GBE03620USEN.PDF)
/*
* NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
* function when declaring them. Failure to do so will cause commands to hang. ex:
* ```
* mainnet: {
* provider: function() {
* return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infurakey>')
* },
* network_id: '1',
* gas: 4500000,
* gasPrice: 10000000000,
* },
*/
const HDWalletProvider = require("@truffle/hdwallet-provider");
const gasPrice = 10000000000; //process.env.GASPRICE;
let privateKeys =
["4491f334d01602aabaa8a0203418c79e8de2cec62e983212cb8ae6df8c44f49a"];
const network = "http://bops.morpheuslabs.io:21523";
const chainId = 660;
module.exports = {
 compilers: {
 solc: {
 //version: "0.5.8",
 settings: {
 optimizer: {
 enabled: true,
 runs: 200
 },
 //evmVersion: 'petersburg'
 },
 },
 },
 // See <http://truffleframework.com/docs/advanced/configuration>
 // to customize your Truffle configuration!
 networks: {
 // network for unit testing
 development: {
 host: '127.0.0.1',
 port: 7545,
 network_id: '*',
 gas: 5000000,
 },
 private_poa: {
 provider: function () {
 return new HDWalletProvider(
 {
 privateKeys: privateKeys,
 providerOrUrl: network,
 chainId: chainId
 }
 )
 },
 network_id: "*",
 gas: 6000000,
 gasPrice: gasPrice
 }
 }
};
import web3 from './web3';
import Producer from './build/contracts/ProducerRole.json';

export default address => {
  return new web3.eth.Contract(Producer.abi, address);
};

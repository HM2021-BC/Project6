import web3 from './web3';
import Consumer from './build/contracts/ConsumerRole.json';

export default address => {
  return new web3.eth.Contract(Consumer.abi, address);
};

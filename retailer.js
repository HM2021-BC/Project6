import web3 from './web3';
import Retailer from './build/contracts/RetailerRole.json';

export default address => {
  return new web3.eth.Contract(Retailer.abi, address);
};

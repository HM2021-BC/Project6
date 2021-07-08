import web3 from './web3';
import Farmer from './build/contracts/FarmerRole.json';

export default address => {
  return new web3.eth.Contract(Farmer.abi, address);
};

import web3 from './web3';
import Roles from './build/contracts/Roles.json';

export default address => {
  return new web3.eth.Contract(Roles.abi, address);
};

import web3 from './web3';
import Ownable from './build/contracts/Ownable.json';

export default address => {
  return new web3.eth.Contract(Ownable.abi, address);
};

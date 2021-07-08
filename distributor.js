import web3 from './web3';
import Distributor from './build/contracts/DistributorRole.json';

export default address => {
  return new web3.eth.Contract(Distributor.abi, address);
};

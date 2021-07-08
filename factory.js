import web3 from "./web3";
import SupplyFactory from "./build/contracts/SupplyChain.json";

const supplyFactoryAddress = "0x274A3D8Fd748f2c3BDE5e3Ca60BF0bDAAacaA995";

const instance = new web3.eth.Contract(SupplyFactory.abi, supplyFactoryAddress);

export default instance;
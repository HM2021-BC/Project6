pragma solidity ^0.5.0;

// Import the library 'Roles'
import "./Roles.sol";

// Define a contract 'FarmerRole' to manage this role - add, remove, check
contract ProducerRole {
  using Roles for Roles.Role;

  // Define 2 events, one for Adding, and other for Removing
  event ProducerAdded(address indexed account);
  event ProducerRemoved(address indexed account);

  // Define a struct 'farmers' by inheriting from 'Roles' library, struct Role
  Roles.Role private producers;

  // In the constructor make the address that deploys this contract the 1st farmer
  constructor() public {
    _addProducer(msg.sender);
  }

  // Define a modifier that checks to see if msg.sender has the appropriate role
  modifier onlyProducer() {
    require(isProducer(msg.sender), "Only a farmer can call this function");
    _;
  }

  // Define a function 'isFarmer' to check this role
  function isProducer(address account) public view returns (bool) {
    return producers.has(account);
  }

  // Define a function 'addFarmer' that adds this role
  function addProducer(address account) public onlyProducer {
    _addProducer(account);
  }

  // Define a function 'renounceFarmer' to renounce this role
  function renounceProducer() public {
    _removeProducer(msg.sender);
  }

  // Define an internal function '_addFarmer' to add this role, called by 'addFarmer'
  function _addProducer(address account) internal {
    producers.add(account);
    emit ProducerAdded(account);
  }

  // Define an internal function '_removeFarmer' to remove this role, called by 'removeFarmer'
  function _removeProducer(address account) internal {
    producers.remove(account);
    emit ProducerRemoved(account);
  }
}
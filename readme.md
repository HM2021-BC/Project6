1. For a fresh start delete the .next folder and the /build/contracts folder.
2. Make sure you have installed the required modules via:
    npm install next next-routes @truffle/hdwallet-provider react react-dom web3 truffle artifactor semantic-ui-react
3. Migrate the Contract to the network by
    truffle migrate --network private_poa
4. During this Migration the Contractaddress of the SupplyChain will be shown, make sure to copy it.
5. Replace the supplyFactoryAddress in the factory.js with the one address you just copied.
6. Run node server.js
7. After getting the notification that has finished compliling and is ready at 3000 you can go to CDE Services and visit the Site by selecting node.

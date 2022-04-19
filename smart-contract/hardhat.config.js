require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

require("@nomiclabs/hardhat-waffle");

const {config} = require("dotenv");
const { resolve}  = require('path');

config({path:resolve(__dirname,"./.env")});

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks:{
    mumbai:{
      url:`${process.env.RPC_URL}`,
      chainId:80001,
      accounts:[`0x${process.env.MUMBAI_TESTNET_PRIVATE_KEY}`]
    },
    localhost:{

    }
  }
};

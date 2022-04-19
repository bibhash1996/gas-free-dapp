const { ethers, upgrades } = require('hardhat');

async function main () {
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy('0x55b44F845BED28f34196d24F58aC095e5A933355', BoxV2);
  console.log('Box upgraded');
}

main();
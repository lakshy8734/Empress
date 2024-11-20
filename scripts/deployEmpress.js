const { ethers } = require("hardhat");

async function main() {
  const EmpressToken = await ethers.getContractFactory("EmpressToken");
  const empressToken = await EmpressToken.deploy();
  await empressToken.deployed();

  console.log("EmpressToken deployed to:", empressToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

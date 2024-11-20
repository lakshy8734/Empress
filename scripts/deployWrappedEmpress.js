const { ethers } = require("hardhat");

async function main() {
  const empressTokenAddress = "REPLACE_WITH_EMPRESS_TOKEN_ADDRESS";

  const WrappedEmpressToken = await ethers.getContractFactory("WrappedEmpressToken");
  const wrappedEmpressToken = await WrappedEmpressToken.deploy(empressTokenAddress);
  await wrappedEmpressToken.deployed();

  console.log("WrappedEmpressToken deployed to:", wrappedEmpressToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

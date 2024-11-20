require("@nomicfoundation/hardhat-ethers");

module.exports = {
  solidity: "0.8.26",
  networks: {
    hardhat: {},
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY",
      accounts: ["YOUR_PRIVATE_KEY"],
    },
  },
};

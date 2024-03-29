const { ethers, upgrades } = require("hardhat");

async function main() {
  // Deploying NUM1 contract
  const NUM1 = await ethers.getContractFactory("NUM1");
  console.log("Deploying NUM1 contract...");
  const num1 = await upgrades.deployProxy(NUM1, [10], {
    initializer: "update",
  });
  await num1.deployed();
  console.log("NUM1 contract deployed at:", num1.address);//0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
